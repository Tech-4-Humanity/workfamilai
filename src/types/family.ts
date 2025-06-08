
export interface Agent {
  name: string;
  specialization: string;
  achievement: string;
  background: string;
  signature_method: string;
  cultural_expertise: string;
}

export interface Division {
  name: string;
  description: string;
  agents: Agent[];
}

export interface FamilyLeader {
  name: string;
  title: string;
  enneagramType: string;
  personality: string;
  motto: string;
  background: string;
}

export interface Leader extends FamilyLeader {}

export interface FamilyMember {
  id: string;
  name: string;
  title: string;
  personality: string;
  enneagramType: string;
  motto: string;
  background: string;
  domainOverview: string;
  color: string;
  icon: any;
  description: string;
  agentCount: number;
  avatar?: string;
}

export interface FamilyMemberDetail {
  leader: FamilyLeader;
  divisions: Division[];
}

export interface FamilyMemberDetails {
  [key: string]: FamilyMemberDetail;
}
