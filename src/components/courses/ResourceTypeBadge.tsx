import { Badge } from "@/components/ui/badge";
import { Book, FileText, Wrench, FileCode, Library, Play } from "lucide-react";

interface ResourceTypeBadgeProps {
  resourceType?: string | null;
  isInteractive?: boolean | null;
  className?: string;
}

export const ResourceTypeBadge = ({ resourceType, isInteractive, className }: ResourceTypeBadgeProps) => {
  if (!resourceType) return null;

  const getResourceTypeConfig = () => {
    switch (resourceType) {
      case 'course':
        return {
          icon: Book,
          label: 'Course',
          className: 'bg-primary/20 text-primary border-primary/30'
        };
      case 'guide':
        return {
          icon: FileText,
          label: 'Guide',
          className: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
        };
      case 'tool':
        return {
          icon: Wrench,
          label: 'Tool',
          className: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
        };
      case 'template':
        return {
          icon: FileCode,
          label: 'Template',
          className: 'bg-green-500/20 text-green-400 border-green-500/30'
        };
      case 'library':
        return {
          icon: Library,
          label: 'Library',
          className: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
        };
      case 'tutorial':
        return {
          icon: Play,
          label: 'Tutorial',
          className: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
        };
      default:
        return null;
    }
  };

  const config = getResourceTypeConfig();
  if (!config) return null;

  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`${config.className} border ${className || ''}`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
      {isInteractive && <span className="ml-1 text-xs">⚡</span>}
    </Badge>
  );
};
