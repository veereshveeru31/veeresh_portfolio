import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full min-h-screen ${className}`}>
      {/* Mobile-optimized container */}
      <div className="mx-auto max-w-screen-sm lg:max-w-none">
        {children}
      </div>
    </div>
  );
};

export const MobileSection: React.FC<MobileLayoutProps> = ({ children, className = "" }) => {
  return (
    <section className={`px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 ${className}`}>
      {children}
    </section>
  );
};

export default MobileLayout;