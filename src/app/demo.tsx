import React, { useState } from 'react';
import { Home, Bell, Settings, HelpCircle, Shield } from 'lucide-react';
import NavbarTabs from '@/components/ui/navbar-tabs';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { 
      id: 'dashboard', 
      icon: Home, 
      label: 'Dashboard' 
    },
    { 
      id: 'notifications', 
      icon: Bell, 
      label: 'Notifications' 
    },
    { 
      id: 'separator-1', 
      icon: Settings, 
      label: '', 
      separator: true 
    },
    { 
      id: 'settings', 
      icon: Settings, 
      label: 'Settings' 
    },
    { 
      id: 'support', 
      icon: HelpCircle, 
      label: 'Support' 
    },
    { 
      id: 'security', 
      icon: Shield, 
      label: 'Security' 
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="text-center">
            <Home className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
            <p className="text-muted-foreground">Welcome to your dashboard</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="text-center">
            <Bell className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Notifications</h2>
            <p className="text-muted-foreground">Check your latest notifications</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center">
            <Settings className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Settings</h2>
            <p className="text-muted-foreground">Manage your preferences</p>
          </div>
        );
      case 'support':
        return (
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Support</h2>
            <p className="text-muted-foreground">Get help and support</p>
          </div>
        );
      case 'security':
        return (
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Security</h2>
            <p className="text-muted-foreground">Manage your security settings</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <NavbarTabs 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Content */}
      <main className="pt-24 pb-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Modern Pill Navbar Demo</h1>
              <p className="text-lg text-muted-foreground">
                Responsive pill-shaped navigation with smooth animations
              </p>
            </div>
            
            {/* Active Tab Content */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              {renderContent()}
            </div>
            
            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Responsive Design</h3>
                <p className="text-sm text-muted-foreground">
                  Adapts beautifully from desktop to mobile with different layouts
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Smooth Animations</h3>
                <p className="text-sm text-muted-foreground">
                  Framer Motion powered animations for a delightful experience
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Easy to customize with your own icons, labels, and styling
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;