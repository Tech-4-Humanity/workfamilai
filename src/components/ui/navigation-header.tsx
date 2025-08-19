import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Home, Users, Calendar, Building2, DollarSign, GraduationCap, ExternalLink } from "lucide-react";

const navigationItems = [
  { href: "/", label: "Augmented Humanity", icon: Home },
  { href: "/work-packages", label: "Work Packages", icon: Calendar },
  { href: "https://holo-org.com", label: "Holo-Org", icon: Building2, external: true },
  { href: "/donations", label: "Support Us", icon: DollarSign },
  { href: "https://free-agents.augmentedhumanity.coach/", label: "Free Agents", icon: Users, external: true },
  { href: "https://augmentedhumanity.coach/", label: "Augmented Humanity Coach", icon: GraduationCap, external: true },
  { href: "/family-network", label: "Family Tree", icon: Users },
];

export function NavigationHeader() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              if (item.external) {
                return (
                  <Button
                    key={item.href}
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  </Button>
                );
              }
              
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                >
                  <Link to={item.href} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </nav>
          
          <div data-language-switcher>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}