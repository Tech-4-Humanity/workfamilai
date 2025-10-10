import { Badge } from "@/components/ui/badge";
import { Github, Book, GraduationCap, List, Globe, FileText } from "lucide-react";

interface SourcePlatformBadgeProps {
  sourceType?: string | null;
  authorName?: string | null;
  className?: string;
}

export const SourcePlatformBadge = ({ sourceType, authorName, className }: SourcePlatformBadgeProps) => {
  if (!sourceType && !authorName) return null;

  const getSourceConfig = () => {
    switch (sourceType?.toLowerCase()) {
      case 'github':
        return {
          icon: Github,
          label: 'GitHub',
          className: 'bg-slate-700/30 text-slate-200 border-slate-500/50'
        };
      case 'guide':
        return {
          icon: FileText,
          label: 'Guide',
          className: 'bg-blue-500/20 text-blue-300 border-blue-500/40'
        };
      case 'course':
        return {
          icon: GraduationCap,
          label: 'Course',
          className: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
        };
      case 'curated_list':
        return {
          icon: List,
          label: 'Collection',
          className: 'bg-orange-500/20 text-orange-300 border-orange-500/40'
        };
      case 'tutorial':
        return {
          icon: Book,
          label: 'Tutorial',
          className: 'bg-green-500/20 text-green-300 border-green-500/40'
        };
      default:
        return {
          icon: Globe,
          label: 'Online',
          className: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
        };
    }
  };

  const config = getSourceConfig();
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={`${config.className} border ${className || ''}`}>
      <Icon className="w-3.5 h-3.5 mr-1.5" />
      {authorName || config.label}
    </Badge>
  );
};
