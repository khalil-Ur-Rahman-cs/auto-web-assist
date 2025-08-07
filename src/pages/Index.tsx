import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Wand2, 
  Globe, 
  Zap, 
  Palette, 
  Smartphone,
  Code,
  Star,
  ArrowRight
} from "lucide-react";
import WebsiteBuilder from "@/components/WebsiteBuilder";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [showBuilder, setShowBuilder] = React.useState(false);

  if (showBuilder) {
    return <WebsiteBuilder />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-glass backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">AutoWebAssist</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How it Works</a>
              <a href="#examples" className="text-foreground/80 hover:text-foreground transition-colors">Examples</a>
              <Button variant="hero" size="sm" onClick={() => setShowBuilder(true)}>
                Try It Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-glass border-0 shadow-glow">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Website Creation
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Build <span className="bg-gradient-primary bg-clip-text text-transparent">Beautiful</span> Websites in Minutes
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Transform your ideas into professional, responsive websites with our AI-powered builder. 
                  No coding required, just answer a few questions and watch the magic happen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowBuilder(true)}
                  variant="hero" 
                  size="lg" 
                  className="gap-2 text-lg px-8 py-6 h-auto animate-glow"
                >
                  Start Building Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 h-auto bg-card-glass border-border/50">
                  <Code className="w-5 h-5" />
                  View Examples
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Ready in 3 Minutes</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={heroImage} 
                alt="AI Website Builder Interface" 
                className="relative rounded-2xl shadow-elegant border border-border/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to <span className="bg-gradient-secondary bg-clip-text text-transparent">Succeed Online</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with beautiful design to create websites that convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wand2 className="w-8 h-8" />,
                title: "AI-Powered Generation",
                description: "Advanced AI analyzes your business needs and creates a custom website in minutes, not hours."
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First Design",
                description: "Every website is built responsive-first, ensuring perfect functionality across all devices."
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Beautiful Templates",
                description: "Choose from professionally designed templates that match your industry and brand."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "SEO Optimized",
                description: "Built-in SEO best practices ensure your website ranks well in search results."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Optimized code and modern hosting deliver blazing-fast loading speeds."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Export & Customize",
                description: "Get clean, readable code that you can customize or host anywhere you want."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-glass border-0 shadow-elegant transition-smooth hover:shadow-glow hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 shadow-accent">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Creating your perfect website is as easy as 1-2-3. Our AI handles the technical complexity while you focus on your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Answer Simple Questions",
                description: "Tell us about your business, services, and preferences. Our smart questionnaire guides you through the process.",
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "AI Generates Your Site",
                description: "Our advanced AI analyzes your inputs and creates a beautiful, professional website tailored to your needs.",
                icon: <Wand2 className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Launch & Customize",
                description: "Preview your site, make adjustments, and launch. Export the code or host with us - your choice!",
                icon: <Globe className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gradient-glass border-0 shadow-elegant h-full transition-smooth hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowBuilder(true)}
              variant="hero" 
              size="lg" 
              className="gap-2 text-lg px-8 py-6 h-auto shadow-accent"
            >
              Start Your Free Website
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Your <span className="bg-gradient-accent bg-clip-text text-transparent">Dream Website</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Join thousands of businesses who have transformed their online presence with our AI-powered website builder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => setShowBuilder(true)}
              variant="hero" 
              size="lg" 
              className="gap-2 text-lg px-8 py-6 h-auto animate-glow"
            >
              Get Started Free
              <Sparkles className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6 h-auto bg-card-glass border-border/50">
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-secondary" />
              <span>Export Code Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">AutoWebAssist</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-sm text-foreground/60">
              © 2024 AutoWebAssist. Powered by AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;