import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background bg-handcrafted-light dark:bg-handcrafted-dark text-light-foreground dark:text-dark-foreground transition-colors duration-300">
   
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;