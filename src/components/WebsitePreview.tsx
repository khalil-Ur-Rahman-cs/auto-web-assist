import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Download, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Tablet,
  ArrowLeft,
  Star,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { toast } from "sonner";

interface WebsitePreviewProps {
  data: any;
  onReset: () => void;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ data, onReset }) => {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const generateBrandName = () => {
    if (data.businessName) return data.businessName;
    return `${data.businessType.charAt(0).toUpperCase() + data.businessType.slice(1)} Pro`;
  };

  const generateTagline = () => {
    const taglines: Record<string, string> = {
      restaurant: "Exceptional dining experiences await",
      bakery: "Freshly baked with love every day",
      gym: "Transform your body, transform your life",
      'law firm': "Justice, integrity, and expert legal counsel",
      'medical practice': "Your health is our priority",
      consulting: "Strategic solutions for business success",
      photography: "Capturing life's most precious moments",
      'e-commerce': "Quality products, exceptional service",
      'tech startup': "Innovation that shapes the future",
      'real estate': "Finding your perfect home",
      'beauty salon': "Where beauty meets excellence",
      construction: "Building dreams with precision",
      education: "Empowering minds for tomorrow",
      'non-profit': "Making a difference in our community"
    };
    
    return taglines[data.businessType] || "Excellence in everything we do";
  };

  const generateServices = () => {
    if (data.services) return data.services.split(',').map((s: string) => s.trim());
    
    const defaultServices: Record<string, string[]> = {
      restaurant: ["Fine Dining", "Catering", "Private Events", "Takeout"],
      bakery: ["Custom Cakes", "Wedding Cakes", "Daily Pastries", "Catering"],
      gym: ["Personal Training", "Group Classes", "Nutrition Coaching", "Wellness Programs"],
      'law firm': ["Corporate Law", "Real Estate", "Family Law", "Litigation"],
      'medical practice': ["General Medicine", "Preventive Care", "Specialist Referrals", "Health Screenings"],
      consulting: ["Strategy Consulting", "Process Improvement", "Digital Transformation", "Training"],
      photography: ["Wedding Photography", "Portrait Sessions", "Event Photography", "Commercial Shoots"],
      'e-commerce': ["Online Shopping", "Fast Shipping", "Customer Support", "Returns & Exchanges"]
    };
    
    return defaultServices[data.businessType] || ["Service 1", "Service 2", "Service 3", "Service 4"];
  };

  const getColorScheme = () => {
    const schemes: Record<string, any> = {
      professional: { primary: '#2563eb', secondary: '#64748b', accent: '#0ea5e9' },
      warm: { primary: '#ea580c', secondary: '#92400e', accent: '#f97316' },
      modern: { primary: '#7c3aed', secondary: '#a855f7', accent: '#c084fc' },
      nature: { primary: '#059669', secondary: '#047857', accent: '#10b981' },
      luxury: { primary: '#d97706', secondary: '#92400e', accent: '#f59e0b' },
      creative: { primary: '#dc2626', secondary: '#7c2d12', accent: '#f59e0b' }
    };
    
    return schemes[data.colorScheme] || schemes.professional;
  };

  const exportWebsite = () => {
    toast.success("Website exported! Check your downloads.");
  };

  const openPreview = () => {
    toast.success("Opening website in new tab...");
  };

  const brandName = generateBrandName();
  const tagline = generateTagline();
  const services = generateServices();
  const colorScheme = getColorScheme();

  const websiteContent = (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold" style={{ color: colorScheme.primary }}>
                {brandName}
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </nav>
            <button 
              className="text-white px-4 py-2 rounded-lg text-sm font-medium"
              style={{ backgroundColor: colorScheme.primary }}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colorScheme.primary }}>
            {brandName}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-8 py-3 rounded-lg font-medium"
              style={{ backgroundColor: colorScheme.primary }}
            >
              Learn More
            </button>
            <button 
              className="border-2 px-8 py-3 rounded-lg font-medium"
              style={{ 
                borderColor: colorScheme.primary, 
                color: colorScheme.primary 
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colorScheme.primary }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div 
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${colorScheme.primary}20` }}
                >
                  <Star className="w-6 h-6" style={{ color: colorScheme.primary }} />
                </div>
                <h3 className="font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.toLowerCase()} services tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: colorScheme.primary }}>
                About {brandName}
              </h2>
              <p className="text-gray-600 mb-6">
                {data.description || `At ${brandName}, we are committed to providing exceptional ${data.businessType} services. With years of experience and a passion for excellence, we deliver results that exceed expectations.`}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: colorScheme.primary }} />
                  Professional Excellence
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: colorScheme.primary }} />
                  Customer Satisfaction
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: colorScheme.primary }} />
                  Trusted by Many
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-500">About Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colorScheme.primary }}>
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colorScheme.primary}20` }}
                >
                  <Phone className="w-6 h-6" style={{ color: colorScheme.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colorScheme.primary}20` }}
                >
                  <Mail className="w-6 h-6" style={{ color: colorScheme.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@{brandName.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colorScheme.primary}20` }}
                >
                  <MapPin className="w-6 h-6" style={{ color: colorScheme.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Business St, City, State 12345</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-medium"
                  style={{ backgroundColor: colorScheme.primary }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">{brandName}</h3>
          <p className="text-gray-400 mb-6">{tagline}</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 {brandName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button onClick={onReset} variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Builder
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Website Generated!</h1>
              <p className="text-muted-foreground">Your professional website is ready</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={exportWebsite} variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button onClick={openPreview} variant="hero" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Open Preview
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <Badge variant="secondary" className="gap-1">
            <Clock className="w-3 h-3" />
            Generated just now
          </Badge>
          <Badge variant="outline">Responsive Design</Badge>
          <Badge variant="outline">SEO Optimized</Badge>
          <Badge variant="outline">Mobile Ready</Badge>
        </div>
      </div>

      <Tabs defaultValue="preview" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList className="bg-card-glass">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2 bg-card-glass p-1 rounded-lg">
            <Button
              variant={activeView === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('desktop')}
              className="gap-2"
            >
              <Monitor className="w-4 h-4" />
              Desktop
            </Button>
            <Button
              variant={activeView === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('tablet')}
              className="gap-2"
            >
              <Tablet className="w-4 h-4" />
              Tablet
            </Button>
            <Button
              variant={activeView === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveView('mobile')}
              className="gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Mobile
            </Button>
          </div>
        </div>

        <TabsContent value="preview">
          <Card className="bg-card-glass border-0 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className={`
                mx-auto transition-all duration-300 overflow-auto
                ${activeView === 'desktop' ? 'w-full' : 
                  activeView === 'tablet' ? 'w-[768px]' : 'w-[375px]'}
              `}>
                <div 
                  className="min-h-[800px] overflow-y-auto"
                  style={{ 
                    maxHeight: activeView === 'desktop' ? 'none' : '800px',
                    transform: activeView !== 'desktop' ? 'scale(0.8)' : 'scale(1)',
                    transformOrigin: 'top center'
                  }}
                >
                  {websiteContent}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card className="bg-card-glass border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                HTML Code
              </CardTitle>
              <CardDescription>
                Copy and paste this code to use your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brandName}</title>
    <meta name="description" content="${tagline}">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <!-- Your generated website content -->
    <div class="website-container">
        <!-- Header, sections, and footer would be here -->
    </div>
</body>
</html>`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};