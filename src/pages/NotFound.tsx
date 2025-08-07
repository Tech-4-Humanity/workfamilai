import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Auto-redirect if user is on the old /holo-org route
    if (location.pathname === '/holo-org') {
      window.location.href = 'https://holo-org.com';
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Oops! Page not found</p>
        <Button onClick={() => navigate('/')} className="text-lg px-6 py-3">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
