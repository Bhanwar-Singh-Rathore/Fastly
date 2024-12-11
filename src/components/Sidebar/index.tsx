
"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Clipboard, Layout, LucideIcon, Menu,User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
 

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center px-8 py-4  hover:bg-blue-400 gap-3 transition-colors ${
          isActive ? "bg-blue-500 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 text-gray-700" />
        <span className="font-medium text-gray-700">{label}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Ensure sidebar is open on larger screens
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  // const [newUserCount, setNewUserCount] = useState(0);

  // useEffect(() => {
  //       // Replace with actual API call to fetch new user count
       
  //         setNewUserCount(5); // Example count
  //         // setShowPopup(true);
  //         // setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  //        // Simulate delay for fetching
  //     }, []);
    

  return (
    <div>
      {/* Toggle Button */}
      {isMobileView && !isSidebarOpen && (
        <button
          className="fixed top-2 left-2 px-3 py-3 rounded-full hover:bg-blue-100 z-50"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-md z-40 transition-transform duration-300 ">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 px-3 py-3 bg-gray-100 rounded-full hover:bg-red-100 z-50 sm:block md:hidden "
            onClick={toggleSidebar}
          >
            <X className="w-5 h-5 text-gray-700 " />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-3 px-4 py-8">
            <span className="text-xl font-bold">⚡ Fastly</span>
          </div>

          {/* Links */}
          <div className="mt-8 " >
            <SidebarLink href="/user/dashboard"   icon={Layout} label="Dashboard" />
            <SidebarLink href="/user/users" icon={User} label="Users" />
            <SidebarLink href="/user/contact" icon={Clipboard} label="Contact" />
            
          </div>

          {/* Footer */}


         {/* NEW USERS BAR */}
      {/* <div className="bg-blue-500 rounded-md text-white text-center py-2 text-sm">
        {newUserCount} New Users
      </div>

      {/* NEW USERS VOLUME BAR */}
      {/* <div className="px-4 py-4">
        <div className="h-3 bg-gray-200 rounded-3xl overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${Math.min(newUserCount * 10, 100)}%` }}
          ></div>
        </div>
      </div>  */} 






          <div className="absolute bottom-8 left-4 flex items-center gap-3">
            <UserButton />
            <span className="font-medium">{user?.fullName || "User"}</span>
          </div>
        </div>
      )}

      {/* Backdrop for Mobile View */}
      {isSidebarOpen && isMobileView && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
