import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Home, Users, Building2, GraduationCap, ExternalLink, Package, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { href: "/", label: "WorkFamilyAI" },
  { href: "/free-courses", label: "Free Courses", icon: GraduationCap },
  { href: "/work-packages", label: "Services", icon: Package },
  { href: "https://augmentedhumanity.coach/", label: "Augmented Humanity Coach", icon: GraduationCap, external: true },
  { href: "https://holo-org.com", label: "Holo-Org", icon: Building2, external: true },
];

export function NavigationHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
      });
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/ahc-droid-head.webp"
                alt="Augmented Humanity Coach"
                className="h-8 w-8"
              />
              <span className="font-semibold text-sm hidden sm:inline">AHC</span>
            </div>
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
                      {Icon && <Icon className="h-4 w-4" />}
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
                    {Icon && <Icon className="h-4 w-4" />}
                    <span className={Icon ? "hidden sm:inline" : ""}>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem disabled>
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}