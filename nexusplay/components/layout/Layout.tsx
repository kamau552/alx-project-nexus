// components/Layout.tsx
import React, { useEffect } from 'react'
import Footer from './Footer';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex bg-gray-100 min-h-screen text-black">
      <Sidebar onToggle={toggleSidebar} isOpen={isSidebarOpen} />
      
      <div className={`flex-1 min-h-screen transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-20'
      }`}>
        <main className="p-4 sm:p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}