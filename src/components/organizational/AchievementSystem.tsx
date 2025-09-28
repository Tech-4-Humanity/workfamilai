import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  Crown, 
  Medal, 
  Target,
  Users,
  MessageCircle,
  Globe,
  Zap,
  Award,
  Sparkles
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'exploration' | 'interaction' | 'team' | 'special';
  requirement: number;
  progress: number;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward?: string;
}

interface UserStats {
  agentsInteracted: number;
  divisionsExplored: number;
  teamMembers: number;
  conversationsStarted: number;
  culturalConnections: number;
  twinMatches: number;
}

interface AchievementSystemProps {
  userStats: UserStats;
  onAchievementUnlock?: (achievement: Achievement) => void;
}

export const AchievementSystem: React.FC<AchievementSystemProps> = ({
  userStats,
  onAchievementUnlock
}) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [level, setLevel] = useState(1);

  // Define all achievements
  const allAchievements: Achievement[] = [
    // Exploration Achievements
    {
      id: 'first-contact',
      title: 'First Contact',
      description: 'Meet your first AI agent',
      icon: Users,
      category: 'exploration',
      requirement: 1,
      progress: userStats.agentsInteracted,
      unlocked: userStats.agentsInteracted >= 1,
      rarity: 'common',
      reward: '50 XP'
    },
    {
      id: 'networking-novice',
      title: 'Networking Novice',
      description: 'Interact with 10 different agents',
      icon: Star,
      category: 'exploration',
      requirement: 10,
      progress: userStats.agentsInteracted,
      unlocked: userStats.agentsInteracted >= 10,
      rarity: 'common',
      reward: '100 XP'
    },
    {
      id: 'social-butterfly',
      title: 'Social Butterfly',
      description: 'Interact with 50 different agents',
      icon: Sparkles,
      category: 'exploration',
      requirement: 50,
      progress: userStats.agentsInteracted,
      unlocked: userStats.agentsInteracted >= 50,
      rarity: 'rare',
      reward: '250 XP'
    },
    {
      id: 'network-master',
      title: 'Network Master',
      description: 'Interact with 100 different agents',
      icon: Crown,
      category: 'exploration',
      requirement: 100,
      progress: userStats.agentsInteracted,
      unlocked: userStats.agentsInteracted >= 100,
      rarity: 'epic',
      reward: '500 XP + Special Badge'
    },

    // Division Exploration
    {
      id: 'division-explorer',
      title: 'Division Explorer',
      description: 'Explore 5 different divisions',
      icon: Globe,
      category: 'exploration',
      requirement: 5,
      progress: userStats.divisionsExplored,
      unlocked: userStats.divisionsExplored >= 5,
      rarity: 'common',
      reward: '150 XP'
    },
    {
      id: 'organization-scout',
      title: 'Organization Scout',
      description: 'Explore all 10 divisions',
      icon: Trophy,
      category: 'exploration',
      requirement: 10,
      progress: userStats.divisionsExplored,
      unlocked: userStats.divisionsExplored >= 10,
      rarity: 'epic',
      reward: '400 XP + Division Master Badge'
    },

    // Team Building Achievements
    {
      id: 'first-teammate',
      title: 'First Teammate',
      description: 'Add your first agent to your virtual team',
      icon: Users,
      category: 'team',
      requirement: 1,
      progress: userStats.teamMembers,
      unlocked: userStats.teamMembers >= 1,
      rarity: 'common',
      reward: '75 XP'
    },
    {
      id: 'team-builder',
      title: 'Team Builder',
      description: 'Build a team of 5 agents',
      icon: Target,
      category: 'team',
      requirement: 5,
      progress: userStats.teamMembers,
      unlocked: userStats.teamMembers >= 5,
      rarity: 'rare',
      reward: '200 XP'
    },
    {
      id: 'dream-team',
      title: 'Dream Team',
      description: 'Build a team of 10 agents',
      icon: Medal,
      category: 'team',
      requirement: 10,
      progress: userStats.teamMembers,
      unlocked: userStats.teamMembers >= 10,
      rarity: 'epic',
      reward: '350 XP + Team Leader Badge'
    },

    // Interaction Achievements
    {
      id: 'conversation-starter',
      title: 'Conversation Starter',
      description: 'Start 5 conversations with agents',
      icon: MessageCircle,
      category: 'interaction',
      requirement: 5,
      progress: userStats.conversationsStarted,
      unlocked: userStats.conversationsStarted >= 5,
      rarity: 'common',
      reward: '100 XP'
    },
    {
      id: 'chat-enthusiast',
      title: 'Chat Enthusiast',
      description: 'Start 25 conversations with agents',
      icon: Zap,
      category: 'interaction',
      requirement: 25,
      progress: userStats.conversationsStarted,
      unlocked: userStats.conversationsStarted >= 25,
      rarity: 'rare',
      reward: '300 XP'
    },

    // Special Achievements
    {
      id: 'cultural-connector',
      title: 'Cultural Connector',
      description: 'Connect with agents from 5 different cultural backgrounds',
      icon: Globe,
      category: 'special',
      requirement: 5,
      progress: userStats.culturalConnections,
      unlocked: userStats.culturalConnections >= 5,
      rarity: 'rare',
      reward: '250 XP + Cultural Ambassador Badge'
    },
    {
      id: 'twin-finder',
      title: 'Twin Finder',
      description: 'Find your virtual twin using the AI matcher',
      icon: Award,
      category: 'special',
      requirement: 1,
      progress: userStats.twinMatches,
      unlocked: userStats.twinMatches >= 1,
      rarity: 'epic',
      reward: '300 XP + Twin Souls Badge'
    }
  ];

  // Update achievements and calculate XP
  useEffect(() => {
    setAchievements(allAchievements);
    
    const newUnlockedCount = allAchievements.filter(a => a.unlocked).length;
    setUnlockedCount(newUnlockedCount);

    // Calculate XP based on unlocked achievements
    const xpMap = { common: 50, rare: 150, epic: 300, legendary: 500 };
    const newTotalXP = allAchievements
      .filter(a => a.unlocked)
      .reduce((total, achievement) => total + xpMap[achievement.rarity], 0);
    
    setTotalXP(newTotalXP);
    setLevel(Math.floor(newTotalXP / 1000) + 1);

    // Check for newly unlocked achievements
    const newlyUnlocked = allAchievements.filter(a => a.unlocked && !achievements.find(old => old.id === a.id && old.unlocked));
    newlyUnlocked.forEach(achievement => {
      if (onAchievementUnlock) {
        onAchievementUnlock(achievement);
      }
    });
  }, [userStats]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-purple-500';
      case 'legendary': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500/20';
      case 'rare': return 'border-blue-500/20';
      case 'epic': return 'border-purple-500/20';
      case 'legendary': return 'border-yellow-500/20';
      default: return 'border-gray-500/20';
    }
  };

  const categorizedAchievements = {
    exploration: achievements.filter(a => a.category === 'exploration'),
    interaction: achievements.filter(a => a.category === 'interaction'),
    team: achievements.filter(a => a.category === 'team'),
    special: achievements.filter(a => a.category === 'special')
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Achievements
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">Lv.{level}</div>
              <div className="text-xs text-muted-foreground">{totalXP} XP</div>
            </div>
            <Badge variant="secondary">
              {unlockedCount}/{achievements.length} unlocked
            </Badge>
          </div>
        </div>
        <Progress value={(unlockedCount / achievements.length) * 100} className="mt-2" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        {Object.entries(categorizedAchievements).map(([category, categoryAchievements]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{category} Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categoryAchievements.map((achievement) => {
                const IconComponent = achievement.icon;
                const progressPercentage = Math.min((achievement.progress / achievement.requirement) * 100, 100);
                
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border transition-all ${
                      achievement.unlocked 
                        ? `${getRarityBorder(achievement.rarity)} bg-gradient-to-r from-background to-muted/20` 
                        : 'border-muted bg-muted/10'
                    } ${achievement.unlocked ? 'scale-105 shadow-lg' : 'opacity-70'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${achievement.unlocked ? getRarityColor(achievement.rarity) : 'bg-muted'}`}>
                        <IconComponent className={`h-4 w-4 ${achievement.unlocked ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-medium text-sm ${achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {achievement.title}
                          </h4>
                          <Badge 
                            variant={achievement.unlocked ? "default" : "secondary"}
                            className={`text-xs ${achievement.unlocked ? getRarityColor(achievement.rarity) : ''}`}
                          >
                            {achievement.rarity}
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {achievement.progress}/{achievement.requirement}
                          </span>
                          {achievement.reward && achievement.unlocked && (
                            <span className="text-green-600 font-medium">{achievement.reward}</span>
                          )}
                        </div>
                        
                        <Progress value={progressPercentage} className="mt-2 h-1" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};