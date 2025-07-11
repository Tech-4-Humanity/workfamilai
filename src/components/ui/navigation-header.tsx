import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Home, Users, Calendar, Building2, Brain, Settings } from "lucide-react";

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/scenarios", label: "Scenarios", icon: Calendar },
  { href: "/holo-org", label: "Holo-Org", icon: Building2 },
  { href: "/organizational-intelligence", label: "Org Intelligence", icon: Brain },
  { href: "/admin", label: "Admin", icon: Settings },
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
          
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}