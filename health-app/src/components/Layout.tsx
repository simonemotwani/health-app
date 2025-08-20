import React from 'react';
import Sidebar from './Sidebar';
import BackgroundVectors from './BackgroundVectors';
import FloatingActionButton from './FloatingActionButton'; // Add this import

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen relative">
      <BackgroundVectors />
      
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
      <FloatingActionButton />
    </div>
  );
};

export default Layout;