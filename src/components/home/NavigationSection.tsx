
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const NavigationSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore the Family</h3>
          <p className="text-gray-600 mb-8">
            Dive deeper into each family member's domain and discover their specialized teams of AI agents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/scenarios')} variant="outline">
              View Business Scenarios
            </Button>
            <Button onClick={() => navigate('/admin')} variant="outline">
              Family Management
            </Button>
            <Button onClick={() => navigate('/holo-org')} variant="outline">
              Holo-Org Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
