import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, CheckCircle2, Sparkles } from "lucide-react";
import { useNewsletterSubscription } from "@/hooks/useNewsletterSubscription";

interface NewsletterSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
  courseCategory?: string;
  onSuccess?: () => void;
}

export const NewsletterSignupModal = ({
  open,
  onOpenChange,
  courseName,
  courseCategory,
  onSuccess,
}: NewsletterSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { subscribe, isLoading } = useNewsletterSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await subscribe({
      email,
      source: "free-courses",
      courseInterests: {
        courses: courseName ? [courseName] : [],
        categories: courseCategory ? [courseCategory] : [],
      },
      metadata: {
        first_course: courseName,
        subscribed_from: "course_modal",
      },
    });

    if (success) {
      setShowSuccess(true);
      
      // Store in localStorage to prevent repeated prompts
      localStorage.setItem("newsletter_subscribed", "true");
      localStorage.setItem("newsletter_subscribed_at", new Date().toISOString());
      
      setTimeout(() => {
        setShowSuccess(false);
        onOpenChange(false);
        setEmail("");
        onSuccess?.();
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="relative">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-in zoom-in duration-300" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <DialogTitle className="text-2xl text-white">You're All Set!</DialogTitle>
              <DialogDescription className="text-slate-300">
                Redirecting you to the course...
              </DialogDescription>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                Get Instant Access
              </DialogTitle>
              <DialogDescription className="text-slate-300 pt-2">
                {courseName ? (
                  <>
                    Access <span className="font-semibold text-cyan-400">{courseName}</span> and receive AI learning updates from Priya Sharma.
                  </>
                ) : (
                  "Get access to free AI courses and learning updates curated by Priya Sharma."
                )}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  disabled={isLoading}
                />
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs text-slate-400">
                  ✓ Free AI courses & resources<br />
                  ✓ Learning updates from Priya Sharma<br />
                  ✓ No spam, unsubscribe anytime
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isLoading}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Get Access"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
