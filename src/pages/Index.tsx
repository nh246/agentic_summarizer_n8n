import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Mail, Link as LinkIcon } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid article URL.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Replace with your actual FastAPI endpoint
      await fetch("https://ai-agent-nh246.onrender.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          article_url: url,
        }),
      });

      toast({
        title: "Success! 🎉",
        description: "Your summary is being generated! Check your email in 10–20 seconds.",
      });

      // Reset form
      setEmail("");
      setUrl("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-4 shadow-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Article Summarizer
          </h1>
          <p className="text-muted-foreground text-lg">
            Get instant insights delivered to your inbox
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-3xl shadow-card p-8 border border-border/50 backdrop-blur-sm transition-smooth hover:shadow-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 bg-background border-border focus:border-primary transition-smooth"
              />
            </div>

            {/* URL Input */}
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium flex items-center gap-2 text-foreground">
                <LinkIcon className="w-4 h-4 text-accent" />
                Article URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com/article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="h-12 px-4 bg-background border-border focus:border-accent transition-smooth"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 text-lg font-semibold gradient-accent shadow-glow hover:opacity-90 transition-smooth"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Generate Summary & Insights
                  <Sparkles className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Powered by AI • Results in 10-20 seconds
        </p>
      </div>
    </div>
  );
};

export default Index;
