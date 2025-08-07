import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Wand2, Globe, Rocket } from "lucide-react";
import { toast } from "sonner";
import { WebsitePreview } from "./WebsitePreview";

interface WebsiteData {
  businessName: string;
  businessType: string;
  services: string;
  description: string;
  colorScheme: string;
}

const WebsiteBuilder = () => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [websiteData, setWebsiteData] = useState<WebsiteData>({
    businessName: '',
    businessType: '',
    services: '',
    description: '',
    colorScheme: 'professional'
  });
  const [generatedWebsite, setGeneratedWebsite] = useState<any>(null);

  const businessTypes = [
    'Restaurant', 'Bakery', 'Gym/Fitness', 'Law Firm', 'Medical Practice',
    'Consulting', 'Photography', 'E-commerce', 'Tech Startup', 'Real Estate',
    'Beauty Salon', 'Construction', 'Education', 'Non-profit', 'Other'
  ];

  const colorSchemes = [
    { value: 'professional', label: 'Professional Blue', colors: 'Blue & Gray' },
    { value: 'warm', label: 'Warm & Inviting', colors: 'Orange & Brown' },
    { value: 'modern', label: 'Modern Purple', colors: 'Purple & Pink' },
    { value: 'nature', label: 'Natural Green', colors: 'Green & Earth' },
    { value: 'luxury', label: 'Luxury Gold', colors: 'Gold & Black' },
    { value: 'creative', label: 'Creative Rainbow', colors: 'Multi-color' }
  ];

  const handleInputChange = (field: keyof WebsiteData, value: string) => {
    setWebsiteData(prev => ({ ...prev, [field]: value }));
  };

  const generateWebsite = async () => {
    if (!websiteData.businessName || !websiteData.businessType) {
      toast.error("Please fill in the required fields");
      return;
    }

    setIsGenerating(true);
    toast.success("Generating your beautiful website...");

    // Simulate website generation
    setTimeout(() => {
      setGeneratedWebsite({
        ...websiteData,
        generatedAt: new Date().toISOString()
      });
      setStep(3);
      setIsGenerating(false);
      toast.success("Website generated successfully!");
    }, 3000);
  };

  const resetBuilder = () => {
    setStep(1);
    setWebsiteData({
      businessName: '',
      businessType: '',
      services: '',
      description: '',
      colorScheme: 'professional'
    });
    setGeneratedWebsite(null);
  };

  if (step === 3 && generatedWebsite) {
    return <WebsitePreview data={generatedWebsite} onReset={resetBuilder} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-4 shadow-glow">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">AI-Powered Website Builder</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Create Your Perfect Website
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Answer a few questions and watch as AI generates a professional, responsive website tailored to your business.
        </p>
      </div>

      <Card className="bg-gradient-glass border-0 shadow-elegant">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">{step}</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-primary rounded mx-4"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-gradient-primary' : 'bg-muted'
            }`}>
              <span className="text-sm font-bold text-primary-foreground">2</span>
            </div>
          </div>
          <CardTitle className="text-2xl">
            {step === 1 ? 'Tell Us About Your Business' : 'Review & Generate'}
          </CardTitle>
          <CardDescription>
            {step === 1 
              ? 'Provide some basic information about your business or project'
              : 'Review your information and generate your website'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business/Brand Name *</Label>
                  <Input
                    id="businessName"
                    placeholder="e.g., Sunshine Bakery"
                    value={websiteData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="bg-card-glass border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select 
                    value={websiteData.businessType} 
                    onValueChange={(value) => handleInputChange('businessType', value)}
                  >
                    <SelectTrigger className="bg-card-glass border-border/50">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services/Products</Label>
                <Input
                  id="services"
                  placeholder="e.g., Custom cakes, Wedding photography, Legal consulting"
                  value={websiteData.services}
                  onChange={(e) => handleInputChange('services', e.target.value)}
                  className="bg-card-glass border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what makes your business unique..."
                  value={websiteData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-card-glass border-border/50 min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="colorScheme">Color Scheme</Label>
                <Select 
                  value={websiteData.colorScheme} 
                  onValueChange={(value) => handleInputChange('colorScheme', value)}
                >
                  <SelectTrigger className="bg-card-glass border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorSchemes.map(scheme => (
                      <SelectItem key={scheme.value} value={scheme.value}>
                        <div className="flex flex-col">
                          <span>{scheme.label}</span>
                          <span className="text-xs text-muted-foreground">{scheme.colors}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  onClick={() => setStep(2)}
                  disabled={!websiteData.businessName || !websiteData.businessType}
                  variant="hero"
                  size="lg"
                  className="gap-2"
                >
                  Next Step
                  <Wand2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-muted/20 p-6 rounded-lg space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Website Preview
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Business Name:</span>
                    <p className="font-medium">{websiteData.businessName}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p className="font-medium capitalize">{websiteData.businessType}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Services:</span>
                    <p className="font-medium">{websiteData.services || 'Not specified'}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Color Scheme:</span>
                    <p className="font-medium">
                      {colorSchemes.find(s => s.value === websiteData.colorScheme)?.label}
                    </p>
                  </div>
                  {websiteData.description && (
                    <div className="md:col-span-2">
                      <span className="text-muted-foreground">Description:</span>
                      <p className="font-medium">{websiteData.description}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                  size="lg"
                >
                  Back
                </Button>
                <Button 
                  onClick={generateWebsite}
                  disabled={isGenerating}
                  variant="hero"
                  size="lg"
                  className="gap-2 flex-1"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4" />
                      Generate Website
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WebsiteBuilder;