
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { OrganizationalInvolvement } from '@/types/organizational';

interface OrganizationalChartProps {
  agents: OrganizationalInvolvement[];
}

export const OrganizationalChart = ({ agents }: OrganizationalChartProps) => {
  const costData = agents.map(agent => ({
    name: agent.persona.split(' ')[0], // First name for brevity
    cost: agent.cost,
    hours: agent.estimated_hours,
    fte: agent.fte_percent * 100
  }));

  const riskData = agents.reduce((acc, agent) => {
    const existing = acc.find(item => item.risk === agent.risk_level);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ risk: agent.risk_level, count: 1 });
    }
    return acc;
  }, [] as { risk: string; count: number }[]);

  const COLORS = {
    'High': '#ef4444',
    'Medium': '#f59e0b',
    'Low': '#10b981'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Cost & Resource Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'cost') return [`$${value.toLocaleString()}`, 'Cost'];
                  if (name === 'hours') return [`${value}h`, 'Hours'];
                  if (name === 'fte') return [`${value}%`, 'FTE'];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar dataKey="cost" fill="#3b82f6" name="Cost ($)" />
              <Bar dataKey="hours" fill="#10b981" name="Hours" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ risk, count }) => `${risk}: ${count}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.risk as keyof typeof COLORS] || '#8884d8'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
