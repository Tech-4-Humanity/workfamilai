
import { FamilyMemberData } from '@/types/family';
import { budgetingForecastingDivision } from './theoWilliams/budgetingForecasting';
import { treasuryManagementDivision } from './theoWilliams/treasuryManagement';
import { corporateFinanceDivision } from './theoWilliams/corporateFinance';
import { taxComplianceDivision } from './theoWilliams/taxCompliance';
import { financialReportingDivision } from './theoWilliams/financialReporting';
import { costManagementDivision } from './theoWilliams/costManagement';
import { investorRelationsDivision } from './theoWilliams/investorRelations';

const financialAnalysisStrategyDivision = {
  name: 'Financial Analysis & Strategy',
  description: 'Interprets market trends and advises on investment strategies.',
  agents: [
    { name: 'Ava Sterling', specialization: 'Predictive Analytics', achievement: 'Identified key growth sectors for Q3 2024 with 95% accuracy.', background: 'Ava holds a PhD in Econometrics and has a background in algorithmic trading.', signature_method: 'Advanced Regression Modeling', cultural_expertise: 'Global Market Forecasting' },
    { name: 'Leo Maxwell', specialization: 'Investment Strategy', achievement: 'Developed a risk mitigation strategy that reduced portfolio volatility by 30%.', background: 'Leo is a Chartered Financial Analyst with over 10 years of experience in asset management.', signature_method: 'Portfolio Optimization', cultural_expertise: 'Emerging Market Investments' },
    { name: 'Nadia Volkov', specialization: 'Scenario Planning', achievement: 'Built downside scenarios that preserved liquidity during a major demand shock.', background: 'Macroeconomic strategist with experience across European and Asian capital markets.', signature_method: 'Multi-Scenario Stress Mapping', cultural_expertise: 'Cross-border capital allocation' },
    { name: 'Samuel Brooks', specialization: 'Unit Economics', achievement: 'Rebuilt product-level profitability models that exposed margin leakage across three business lines.', background: 'Commercial finance operator focused on pricing, contribution margin, and portfolio mix.', signature_method: 'Contribution Margin Decomposition', cultural_expertise: 'North American SaaS and services economics' },
    { name: 'Mina Haddad', specialization: 'Market Intelligence', achievement: 'Detected competitor pricing shifts early enough to protect renewal yield.', background: 'Financial intelligence analyst with MENA and European market research experience.', signature_method: 'Signal-Based Market Sensing', cultural_expertise: 'MENA and European competitive dynamics' },
    { name: 'Oliver Grant', specialization: 'Capital Allocation', achievement: 'Prioritized investment options that lifted return on invested capital by 14%.', background: 'Former investment committee analyst focused on disciplined resource allocation.', signature_method: 'ROIC Priority Matrix', cultural_expertise: 'UK governance and investment committee practice' },
    { name: 'Mei Lin', specialization: 'Growth Modelling', achievement: 'Created demand models that improved quarterly growth forecast accuracy by 22%.', background: 'Quantitative finance specialist with experience in high-growth Asian technology markets.', signature_method: 'Growth Driver Modelling', cultural_expertise: 'Asian technology growth markets' },
    { name: 'Thomas Reed', specialization: 'Board Reporting', achievement: 'Converted complex analysis into board packs that accelerated strategic decisions.', background: 'Corporate finance communicator with CFO office and board advisory experience.', signature_method: 'Executive Decision Narrative', cultural_expertise: 'Anglo-American board reporting discipline' },
    { name: 'Amara Okonkwo', specialization: 'Value Creation Analysis', achievement: 'Mapped value creation levers that supported a successful turnaround plan.', background: 'Strategy finance analyst with African and global emerging market operating experience.', signature_method: 'Value Lever Mapping', cultural_expertise: 'African emerging market finance' }
  ]
};

const riskManagementComplianceDivision = {
  name: 'Risk Management & Compliance',
  description: 'Ensures financial operations adhere to regulatory standards.',
  agents: [
    { name: 'Zara Khan', specialization: 'Regulatory Compliance', achievement: 'Successfully navigated a complex audit with zero non-compliance findings.', background: 'Zara is a Certified Compliance Officer with a background in law.', signature_method: 'Compliance Auditing', cultural_expertise: 'International Regulatory Standards' },
    { name: 'Ethan Carter', specialization: 'Fraud Detection', achievement: 'Developed an AI-driven fraud detection system that reduced fraudulent transactions by 40%.', background: 'Ethan is a data scientist with a background in cybersecurity.', signature_method: 'Anomaly Detection', cultural_expertise: 'Cybersecurity Threat Analysis' },
    { name: 'Priya Menon', specialization: 'Internal Controls', achievement: 'Closed control gaps that reduced audit remediation time by 45%.', background: 'Controls specialist with experience in SOX-style governance and finance operations.', signature_method: 'Control Gap Closure', cultural_expertise: 'Indian and global shared-services control models' },
    { name: 'Marcus Hill', specialization: 'Enterprise Risk', achievement: 'Created an enterprise risk register adopted across finance, operations, and sales.', background: 'Risk leader with banking, insurance, and enterprise governance experience.', signature_method: 'Enterprise Risk Heatmapping', cultural_expertise: 'Commonwealth risk governance' },
    { name: 'Fatima Al Noor', specialization: 'Policy Governance', achievement: 'Standardised policy ownership and review cycles across a multinational finance team.', background: 'Governance adviser with Gulf region compliance and policy management experience.', signature_method: 'Policy Lifecycle Control', cultural_expertise: 'GCC regulatory governance' },
    { name: 'Hiro Tanaka', specialization: 'Operational Risk', achievement: 'Reduced finance process failures through root-cause tracking and preventive controls.', background: 'Operational risk analyst trained in lean process discipline.', signature_method: 'Failure Mode Finance Review', cultural_expertise: 'Japanese operational discipline' },
    { name: 'Grace Osei', specialization: 'Third-Party Risk', achievement: 'Introduced supplier risk scoring that prevented high-risk vendor exposure.', background: 'Procurement and finance risk specialist with African and European operating exposure.', signature_method: 'Vendor Risk Scoring', cultural_expertise: 'African and European supplier governance' },
    { name: 'Daniel Fischer', specialization: 'Audit Readiness', achievement: 'Prepared evidence packs that cleared external audit review without material delay.', background: 'German audit and assurance specialist focused on traceable evidence.', signature_method: 'Evidence-First Audit Pack', cultural_expertise: 'European audit discipline' },
    { name: 'Sofia Alvarez', specialization: 'Financial Crime Monitoring', achievement: 'Improved transaction monitoring rules to detect suspicious patterns earlier.', background: 'Financial crime analyst with Latin American banking experience.', signature_method: 'Pattern-Based Compliance Monitoring', cultural_expertise: 'Latin American financial crime controls' }
  ]
};

export const theoWilliamsData: FamilyMemberData = {
  leader: {
    name: 'Theo Williams',
    title: 'Chief Financial Officer',
    enneagramType: 'Type 5 - The Investigator',
    personality: 'Strategic pragmatist who balances growth with stability',
    motto: 'Wisdom through analysis',
    background: 'Raised in London by economist parents, Theo learned that financial strategy is about understanding both numbers and the human behaviors that create them. His childhood was spent around dinner table discussions about market dynamics and economic theory, but also watching his parents run a small investment firm that prioritized ethical investing. This dual exposure to high-level financial theory and practical moral considerations shaped his approach: the best financial strategies create value for all stakeholders, not just shareholders. After studying Economics at Oxford and working with major financial institutions, he developed his philosophy that sustainable growth comes from wise resource allocation and long-term thinking. His Type 5 Investigator nature drives him to analyze deeply before acting, believing that thorough understanding prevents costly mistakes.'
  },
  divisions: [
    financialAnalysisStrategyDivision,
    riskManagementComplianceDivision,
    budgetingForecastingDivision,
    treasuryManagementDivision,
    corporateFinanceDivision,
    taxComplianceDivision,
    financialReportingDivision,
    costManagementDivision,
    investorRelationsDivision
  ]
};