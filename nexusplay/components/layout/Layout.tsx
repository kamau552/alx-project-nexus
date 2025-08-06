import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';
import Searchbar from '../common/searchbar';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    // Mobile detection
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Close sidebar by default on mobile
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar 
        onToggle={toggleSidebar} 
        isOpen={isSidebarOpen} 
        isMobile={isMobile} 
      />
      
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-opacity-40 md:hidden"
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 min-h-screen transition-all duration-300 ${
          !isMobile && (isSidebarOpen ? 'ml-64' : 'ml-20')
        }`}
      >
        <main className={`pt-20 p-4 sm:p-8 ${isMobile && isSidebarOpen ? 'overflow-hidden' : ''}`}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}