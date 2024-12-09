
"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Bell, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const { user } = useUser();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center w-[99.9%] sm:px-8 py-4 px-4 md:px-8 bg-white shadow-md overflow-hidden">
      {isMobileView ? (
        // Mobile View
        <div className="flex justify-between items-center w-full">
          {/* App Name */}
          <span className="text-xl ml-[35%] text-center font-bold text-gray-700">⚡ Fastly</span>

          {/* Profile */}
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      ) : (
        // Desktop View
        <div className="flex justify-between items-center w-full">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <input
              type="search"
              placeholder="Start typing to search groups & products"
              className="pl-10 pr-4 py-2 w-full max-w-md border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Bell className="text-gray-500" size={20} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5 ml-5">
            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <Bell className="cursor-pointer text-gray-500" size={24} />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                3
              </span>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <UserButton />
              <span className="font-semibold">Hey, {user?.firstName}</span>
            </div>

            {/* Settings Icon */}
          
              <Settings className="cursor-pointer text-gray-500" size={24} />
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
