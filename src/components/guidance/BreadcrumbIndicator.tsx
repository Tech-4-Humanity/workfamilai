import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface BreadcrumbIndicatorProps {
  items?: BreadcrumbItem[];
}

export const BreadcrumbIndicator = ({ items }: BreadcrumbIndicatorProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs based on current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Augmented Humanity', href: '/', icon: Home }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to human-readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = items || generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 px-4 py-2 bg-card/50 rounded-lg border backdrop-blur-sm">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const IconComponent = item.icon;
        
        return (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground/50" />}
            
            {item.href && !isLast ? (
              <Link 
                to={item.href}
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                {item.label}
              </Link>
            ) : (
              <span className={`flex items-center gap-1 ${isLast ? 'text-foreground font-medium' : ''}`}>
                {IconComponent && <IconComponent className="h-4 w-4" />}
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};