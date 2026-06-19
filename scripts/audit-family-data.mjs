import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const leadersDir = path.join(repoRoot, 'src', 'data', 'leaders');
const expectedDivisions = 9;
const expectedAgentsPerDivision = 9;
const expectedAgentsPerLeader = expectedDivisions * expectedAgentsPerDivision;
const ignoredLeaderFiles = new Set([]);

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function countAgentNames(agentArrayText) {
  return (agentArrayText.match(/\bname\s*:\s*['"]/g) || []).length;
}

function extractArrayBody(text, key) {
  const startToken = `${key}: [`;
  const start = text.indexOf(startToken);
  if (start === -1) return '';
  let index = start + startToken.length;
  let depth = 1;
  let inString = false;
  let quote = '';
  let escaped = false;

  for (; index < text.length; index += 1) {
    const char = text[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        inString = false;
        quote = '';
      }
      continue;
    }
    if (char === "'" || char === '"' || char === '`') {
      inString = true;
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char === ']') depth -= 1;
    if (depth === 0) return text.slice(start + startToken.length, index);
  }
  return '';
}

function countDivisionFileAgents(filePath) {
  if (!fs.existsSync(filePath)) return { agents: 0, missing: true };
  const text = read(filePath);
  const agentsBody = extractArrayBody(text, 'agents');
  return { agents: countAgentNames(agentsBody), missing: false };
}

function auditLeader(fileName) {
  const fullPath = path.join(leadersDir, fileName);
  const text = read(fullPath);
  const leader = fileName.replace(/\.ts$/, '');
  const divisionsBody = extractArrayBody(text, 'divisions');
  const imports = [...text.matchAll(/import\s+\{\s*(\w+)\s*\}\s+from\s+['"]\.\/(.+?)['"];?/g)];
  const divisions = [];

  for (const [, symbol, relPath] of imports) {
    const symbolPattern = new RegExp(`\\b${symbol}\\b`);
    if (!symbolPattern.test(divisionsBody)) continue;
    const filePath = path.join(leadersDir, `${relPath}.ts`);
    const result = countDivisionFileAgents(filePath);
    divisions.push({ division: symbol, source: `${relPath}.ts`, agents: result.agents, missingFile: result.missing });
  }

  const inlineDivisionMatches = [...divisionsBody.matchAll(/\{[\s\S]*?agents\s*:\s*\[[\s\S]*?\n\s*\]\s*\}/g)];
  inlineDivisionMatches.forEach((match, index) => {
    const agentsBody = extractArrayBody(match[0], 'agents');
    const nameMatch = match[0].match(/name\s*:\s*['"]([^'"]+)['"]/);
    divisions.push({
      division: nameMatch ? nameMatch[1] : `inlineDivision${index + 1}`,
      source: fileName,
      agents: countAgentNames(agentsBody),
      missingFile: false
    });
  });

  const totalAgents = divisions.reduce((sum, division) => sum + division.agents, 0);
  const badDivisions = divisions.filter(division => division.agents !== expectedAgentsPerDivision || division.missingFile);
  const status = divisions.length === expectedDivisions && totalAgents === expectedAgentsPerLeader && badDivisions.length === 0 ? 'PASS' : 'FAIL';

  return {
    leader,
    divisions: divisions.length,
    agents: totalAgents,
    expectedDivisions,
    expectedAgents: expectedAgentsPerLeader,
    divisionVariance: divisions.length - expectedDivisions,
    agentVariance: totalAgents - expectedAgentsPerLeader,
    missingAgents: Math.max(0, expectedAgentsPerLeader - totalAgents),
    excessAgents: Math.max(0, totalAgents - expectedAgentsPerLeader),
    status,
    badDivisions
  };
}

const leaderFiles = fs.readdirSync(leadersDir)
  .filter(file => file.endsWith('.ts'))
  .filter(file => !ignoredLeaderFiles.has(file));

const results = leaderFiles.map(auditLeader).sort((a, b) => a.leader.localeCompare(b.leader));
const totals = results.reduce((acc, item) => {
  acc.leaders += 1;
  acc.divisions += item.divisions;
  acc.agents += item.agents;
  return acc;
}, { leaders: 0, divisions: 0, agents: 0 });

console.table(results.map(({ leader, divisions, agents, expectedDivisions, expectedAgents, divisionVariance, agentVariance, status }) => ({
  leader,
  divisions,
  agents,
  expectedDivisions,
  expectedAgents,
  divisionVariance,
  agentVariance,
  status
})));

console.log('\nArchitecture totals:', {
  leaders: totals.leaders,
  divisions: totals.divisions,
  agents: totals.agents,
  expectedLeaders: 10,
  expectedDivisions: 90,
  expectedAgents: 810,
  agentVariance: totals.agents - 810
});

const failures = results.filter(item => item.status !== 'PASS');
if (failures.length > 0 || totals.leaders !== 10 || totals.divisions !== 90 || totals.agents !== 810) {
  console.error('\nNeural Ennead family data audit failed.');
  console.error(JSON.stringify({ failures, totals }, null, 2));
  process.exit(1);
}

console.log('\nNeural Ennead family data audit passed: 10 leaders, 90 divisions, 810 agents.');
