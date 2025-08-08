"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaThLarge, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { RiHome5Line, RiSettings4Line } from "react-icons/ri";
import { FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import ThemeToggle from "../common/ThemeToggle";


const menuItems = [
  { name: "Home", icon: <RiHome5Line size={20} />, path: "/" },
  { name: "Categories", icon: <FaThLarge size={20} />, path: "/categories" },
  { name: "Library", icon: <VscLibrary size={20} />, path: "/library" },
  { name: "Cart", icon: <FaCartPlus size={20} />, path: "/cart" },
  { name: "Wishlist", icon: <FaRegHeart size={20} />, path: "/wishlist" },
  { name: "Profile", icon: <CgProfile size={20} />, path: "/auth/signin" },
];

export default function Sidebar({ onToggle, isOpen }: { onToggle: () => void; isOpen?: boolean }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  // Improved mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  function handleSignInClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    // Prevent dropdown from closing immediately on click (optional)
    event.stopPropagation();
    setIsDropdownOpen(false);
  }

  return (
    <>
      {/* Mobile header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 flex justify-between items-center py-2 px-4 shadow-sm md:hidden">
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/Logo2.png"
              alt="Logo"
              width={120}
              height={40}
            />
          </div>
          <button onClick={onToggle} className="text-black font-semibold">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      )}

      {/* Overlay for mobile sidebar - now with proper z-index */}
      {isMobile && isOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
        />
      )}

      {/* Floating toggle button for desktop/tablet */}
      {!isMobile && (
        <button
          onClick={onToggle}
          className={`
            fixed z-40 p-2 rounded-full bg-gray-100 shadow-md 
            hover:bg-gray-400 transition-all duration-300
            ${isOpen ? "left-[16rem] top-4" : "left-2 top-4"}
          `}
          title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            <FiChevronLeft size={20} className="text-black" />
          ) : (
            <FiChevronRight size={20} className="text-black" />
          )}
        </button>
      )}

      {/* Sidebar - updated positioning logic */}
      <div
        className={`
          fixed top-0 left-0 h-screen shadow-lg
          transition-all duration-300 ease-in-out
          ${isMobile ? 'z-50 w-64' : 'z-30'}
          ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
          ${!isMobile ? (isOpen ? 'w-64' : 'w-20') : ''}
        `}
      >
        <nav className="h-full flex flex-col pt-4 bg-gray-100 text-black">
          {/* Logo */}
          <div className="flex items-center justify-center p-4">
            <Image
              src={
                isOpen
                  ? "/assets/images/Logo2.png"
                  : "/assets/images/Logosm.png"
              }
              alt="Logo"
              width={isOpen ? 120 : 40}
              height={40}
              className=""
            />
          </div>

          {/* Navigation Links */}
          <div className="flex-1 mt-4">
            {menuItems.map(({ name, icon, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={name}
                  href={path}
                  className={`
                    relative flex items-center p-4 mx-2 text-black rounded-lg transition-all duration-200
                    ${isOpen ? "justify-start" : "justify-center"}
                    ${
                      isActive
                        ? "bg-gray-300 text-indigo-600"
                        : "hover:bg-gray-300 text-black"
                    }
                  `}
                >
                  <span>{icon}</span>
                  {isOpen && <span className="ml-4">{name}</span>}
                  {!isOpen && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
                      {name}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Settings Section */}
          <div className="mt-auto pb-5">
            <div className="relative text-black">
              <button
                onClick={toggleDropdown}
                className={`
                  flex items-center w-full p-4 rounded-lg transition-all duration-200
                  ${isOpen ? "justify-start" : "justify-center"}
                  hover:bg-gray-300 hover:text-gray-800 text-black
                `}
              >
                <RiSettings4Line size={20} />
                {isOpen && <span className="ml-4">Settings</span>}
                {!isOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-100 text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
                    Settings
                  </div>
                )}
              </button>

              {isDropdownOpen && (
                <div
                  className={`
                    absolute ${isOpen ? "left-full" : "left-20"} bottom-0 mb-14 z-20
                     text-black rounded-lg shadow-lg w-44 border border-gray-400
                  `}
                >
                  <div className="p-2">
                    <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-300 rounded">
                      <span>Theme</span>
                      <ThemeToggle />
                    </div>
                    <Link
                      href="/auth/signin" passHref   onClick={handleSignInClick}
                      className="block px-3 py-2 hover:bg-gray-300 rounded"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/signup" passHref onClick={handleSignInClick}
                      className="block px-3 py-2 hover:bg-gray-300 rounded"
                    >
                      Sign Out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}