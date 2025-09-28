import React, { useRef, useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  Maximize2, 
  Minimize2, 
  RotateCcw,
  Play,
  Pause,
  Users,
  Zap
} from 'lucide-react';

interface Agent {
  agentCode: string;
  agentName: string;
  specialization: string;
  culturalExpertise: string;
  achievement: string;
  signatureMethod: string;
  background: string;
  divisionName: string;
  leaderName: string;
}

interface NetworkVisualization3DProps {
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
  selectedAgent?: Agent | null;
}

export const NetworkVisualization3D: React.FC<NetworkVisualization3DProps> = ({
  agents,
  onAgentSelect,
  selectedAgent
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<Agent | null>(null);
  const [nodes, setNodes] = useState<any[]>([]);

  // Group agents by division for network structure
  const divisions = React.useMemo(() => {
    const divisionMap = new Map();
    agents.forEach(agent => {
      if (!divisionMap.has(agent.divisionName)) {
        divisionMap.set(agent.divisionName, []);
      }
      divisionMap.get(agent.divisionName).push(agent);
    });
    return divisionMap;
  }, [agents]);

  // Initialize network nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.35;

    const networkNodes: any[] = [];
    let nodeIndex = 0;

    // Create division clusters
    Array.from(divisions.entries()).forEach(([divisionName, divisionAgents], divisionIndex) => {
      const divisionAngle = (divisionIndex / divisions.size) * 2 * Math.PI;
      const divisionX = centerX + Math.cos(divisionAngle) * radius * 0.7;
      const divisionY = centerY + Math.sin(divisionAngle) * radius * 0.7;

      // Add division center node
      networkNodes.push({
        id: `division-${divisionIndex}`,
        type: 'division',
        name: divisionName,
        x: divisionX,
        y: divisionY,
        originalX: divisionX,
        originalY: divisionY,
        vx: 0,
        vy: 0,
        size: 15,
        color: `hsl(${divisionIndex * 137.5 % 360}, 70%, 50%)`,
        agents: divisionAgents
      });

      // Add agent nodes around division center
      divisionAgents.forEach((agent: Agent, agentIndex) => {
        const agentAngle = (agentIndex / divisionAgents.length) * 2 * Math.PI;
        const agentRadius = 80 + Math.random() * 40;
        const agentX = divisionX + Math.cos(agentAngle) * agentRadius;
        const agentY = divisionY + Math.sin(agentAngle) * agentRadius;

        networkNodes.push({
          id: agent.agentCode,
          type: 'agent',
          agent: agent,
          name: agent.agentName,
          x: agentX,
          y: agentY,
          originalX: agentX,
          originalY: agentY,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 6,
          color: `hsl(${divisionIndex * 137.5 % 360}, 60%, 60%)`,
          division: divisionName,
          divisionIndex
        });
        nodeIndex++;
      });
    });

    setNodes(networkNodes);
  }, [agents, divisions]);

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions with gentle floating motion
      setNodes(prevNodes => 
        prevNodes.map(node => {
          if (node.type === 'agent') {
            // Apply gentle floating motion
            node.vx += (Math.random() - 0.5) * 0.02;
            node.vy += (Math.random() - 0.5) * 0.02;
            
            // Apply gentle pull back to original position
            node.vx += (node.originalX - node.x) * 0.005;
            node.vy += (node.originalY - node.y) * 0.005;
            
            // Apply damping
            node.vx *= 0.98;
            node.vy *= 0.98;
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
          }
          return node;
        })
      );

      // Draw connections
      ctx.strokeStyle = 'hsl(var(--muted-foreground) / 0.2)';
      ctx.lineWidth = 1;
      nodes.forEach(node => {
        if (node.type === 'agent') {
          const divisionNode = nodes.find(n => n.type === 'division' && n.name === node.division);
          if (divisionNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(divisionNode.x, divisionNode.y);
            ctx.stroke();
          }
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const isSelected = selectedAgent && node.type === 'agent' && node.agent.agentCode === selectedAgent.agentCode;
        const isHovered = hoveredNode && node.type === 'agent' && node.agent.agentCode === hoveredNode.agentCode;
        
        ctx.fillStyle = node.color;
        if (isSelected) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 20;
        } else if (isHovered) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + (isSelected ? 4 : isHovered ? 2 : 0), 0, 2 * Math.PI);
        ctx.fill();

        // Draw labels for division nodes
        if (node.type === 'division') {
          ctx.fillStyle = 'hsl(var(--foreground))';
          ctx.font = '12px system-ui';
          ctx.textAlign = 'center';
          ctx.fillText(node.name, node.x, node.y + node.size + 20);
        }
      });

      if (isAnimating) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating, nodes, selectedAgent, hoveredNode]);

  // Handle canvas interactions
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find clicked node
    const clickedNode = nodes.find(node => {
      const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
      return distance <= node.size + 5;
    });

    if (clickedNode && clickedNode.type === 'agent') {
      onAgentSelect(clickedNode.agent);
    }
  };

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find hovered node
    const hoveredNode = nodes.find(node => {
      const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
      return distance <= node.size + 5 && node.type === 'agent';
    });

    setHoveredNode(hoveredNode?.agent || null);
    canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetView = () => {
    // Reset all nodes to original positions
    setNodes(prevNodes => 
      prevNodes.map(node => ({
        ...node,
        x: node.originalX,
        y: node.originalY,
        vx: 0,
        vy: 0
      }))
    );
  };

  return (
    <Card className={isFullscreen ? 'fixed inset-0 z-50' : ''}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5 text-blue-500" />
            3D Network Visualization
            <Badge variant="secondary">{agents.length} agents</Badge>
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={toggleAnimation}>
              {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm" onClick={resetView}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={isFullscreen ? window.innerWidth - 100 : 800}
            height={isFullscreen ? window.innerHeight - 200 : 600}
            className="border rounded-lg bg-background"
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMouseMove}
          />
          
          {hoveredNode && (
            <div className="absolute top-4 right-4 bg-background/95 border rounded-lg p-3 shadow-lg">
              <h4 className="font-semibold text-sm">{hoveredNode.agentName}</h4>
              <p className="text-xs text-muted-foreground">{hoveredNode.specialization}</p>
              <p className="text-xs text-muted-foreground">{hoveredNode.divisionName}</p>
            </div>
          )}

          <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
            <p>Click nodes to select agents • Hover for details</p>
            <p className="flex items-center gap-1 mt-1">
              <Users className="h-3 w-3" />
              {divisions.size} divisions • 
              <Zap className="h-3 w-3 ml-1" />
              {isAnimating ? 'Animated' : 'Static'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};