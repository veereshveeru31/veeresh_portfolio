import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Bell, Settings, HelpCircle, Shield, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Button } from './button';

interface TabItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  separator?: boolean;
}

interface NavbarTabsProps {
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

const NavbarTabs = ({ 
  tabs, 
  activeTab = tabs[0]?.id, 
  onTabChange,
  className 
}: NavbarTabsProps) => {
  const [activeTabState, setActiveTabState] = useState(activeTab);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleTabClick = (tabId: string) => {
    setActiveTabState(tabId);
    onTabChange?.(tabId);
    setMobileMenuOpen(false);
  };

  const tabVariants = {
    inactive: {
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
    },
    active: {
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const labelVariants = {
    hidden: { 
      opacity: 0, 
      width: 0, 
      marginLeft: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      width: 'auto', 
      marginLeft: 8,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  const TabButton = ({ tab, isActive }: { tab: TabItem; isActive: boolean }) => {
    const IconComponent = tab.icon;
    
    return (
      <motion.button
        variants={tabVariants}
        animate={isActive ? 'active' : 'inactive'}
        onClick={() => handleTabClick(tab.id)}
        className={cn(
          "flex items-center px-3 py-2 rounded-full transition-all duration-300 relative overflow-hidden",
          "hover:bg-accent/50 active:scale-95",
          isActive 
            ? "bg-muted text-primary shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent className="h-4 w-4 flex-shrink-0" />
        <AnimatePresence>
          {isActive && (
            <motion.span
              variants={labelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-sm font-medium whitespace-nowrap overflow-hidden"
            >
              {tab.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  };

  const Separator = () => (
    <div className="h-6 w-px bg-border mx-1" />
  );

  if (isMobile) {
    return (
      <div className={cn("fixed bottom-4 left-4 right-4 z-50", className)}>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg"
        >
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-1">
              {tabs.slice(0, 3).map((tab) => (
                <TabButton 
                  key={tab.id} 
                  tab={tab} 
                  isActive={activeTabState === tab.id} 
                />
              ))}
            </div>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 rounded-full"
                >
                  {mobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[300px]">
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {tabs.map((tab) => {
                    if (tab.separator) return null;
                    const IconComponent = tab.icon;
                    return (
                      <motion.button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-lg transition-all",
                          "hover:bg-accent/50 active:scale-95",
                          activeTabState === tab.id 
                            ? "bg-muted text-primary" 
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="h-6 w-6 mb-2" />
                        <span className="text-sm font-medium">{tab.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("fixed top-4 left-1/2 transform -translate-x-1/2 z-50", className)}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg px-2 py-2"
      >
        <div className="flex items-center space-x-1">
          {tabs.map((tab, index) => {
            if (tab.separator) {
              return <Separator key={`separator-${index}`} />;
            }
            
            return (
              <TabButton 
                key={tab.id} 
                tab={tab} 
                isActive={activeTabState === tab.id} 
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default NavbarTabs;