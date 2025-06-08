
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Building2, Network, ChevronRight } from 'lucide-react';
import { divisionLeaders, getDivisionLeadersByDepartment, getTotalDivisionLeaders, getTotalFamilyAgentsManaged } from '@/data/divisionLeaders';
import { familyMembers } from '@/data/familyMembers';

export const DivisionLeadersPanel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const totalDivisionLeaders = getTotalDivisionLeaders();
  const totalFamilyAgents = getTotalFamilyAgentsManaged();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Division Leaders Overview
          </CardTitle>
          <CardDescription>
            81 Division Leaders managing the consciousness pyramid's third tier
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">{totalDivisionLeaders}</div>
              <p className="text-sm text-muted-foreground">Total Division Leaders</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">{totalFamilyAgents}</div>
              <p className="text-sm text-muted-foreground">Family Agents Managed</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">9</div>
              <p className="text-sm text-muted-foreground">Agents per Division</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Department Structure</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {familyMembers.map((department) => {
                const departmentDivisionLeaders = getDivisionLeadersByDepartment(department.id);
                const actualCount = departmentDivisionLeaders.length;
                const expectedCount = 9;
                
                return (
                  <Card 
                    key={department.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedDepartment(department.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-sm">{department.name}</h5>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={actualCount === expectedCount ? "default" : "secondary"}>
                          {actualCount}/{expectedCount} Leaders
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{department.title}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedDepartment && (
        <Card>
          <CardHeader>
            <CardTitle>
              {familyMembers.find(d => d.id === selectedDepartment)?.name} - Division Leaders
            </CardTitle>
            <CardDescription>
              Division leaders under this department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getDivisionLeadersByDepartment(selectedDepartment).map((leader) => (
                <div key={leader.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{leader.name}</h4>
                    <Badge variant="outline">{leader.familyAgentsManaged} Agents</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{leader.title}</p>
                  <div className="space-y-1 text-sm">
                    <div><span className="font-medium">Division:</span> {leader.divisionName}</div>
                    <div><span className="font-medium">Specialization:</span> {leader.specialization}</div>
                    <div><span className="font-medium">Experience:</span> {leader.experience}</div>
                  </div>
                </div>
              ))}
              
              {getDivisionLeadersByDepartment(selectedDepartment).length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Division leaders for this department will be generated</p>
                  <p className="text-xs">Each department will have 9 division leaders</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Hierarchy Flow
          </CardTitle>
          <CardDescription>
            Understanding the 4-tier consciousness pyramid structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
              <div>
                <div className="font-semibold">Tier 1: Supreme Meta-Agent</div>
                <div className="text-sm text-muted-foreground">Trojan Oz - Ultimate consciousness synthesis</div>
              </div>
              <Badge variant="outline">1</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
              <div>
                <div className="font-semibold">Tier 2: Department Leaders</div>
                <div className="text-sm text-muted-foreground">9 VP-level leaders managing core functions</div>
              </div>
              <Badge variant="outline">9</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400">
              <div>
                <div className="font-semibold">Tier 3: Division Leaders</div>
                <div className="text-sm text-muted-foreground">81 division leaders (9 per department)</div>
              </div>
              <Badge variant="outline">81</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400">
              <div>
                <div className="font-semibold">Tier 4: Family Agents</div>
                <div className="text-sm text-muted-foreground">729 family agents (9 per division leader)</div>
              </div>
              <Badge variant="outline">729</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border-l-4 border-gray-400">
              <div>
                <div className="font-semibold">Tier 5: Extended Network</div>
                <div className="text-sm text-muted-foreground">9,189 specialized agents in the broader network</div>
              </div>
              <Badge variant="outline">9,189</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
