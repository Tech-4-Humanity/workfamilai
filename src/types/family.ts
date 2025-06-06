
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

export interface FamilyMember {
  leader: FamilyLeader;
  divisions: Division[];
}

export interface FamilyMemberDetails {
  [key: string]: FamilyMember;
}
