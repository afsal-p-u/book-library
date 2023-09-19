"use client";

import { useThemeContext } from "@/app/provider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();
  
  return (
    <div className={`w-full ${theme}`}>
      <div className="w-full dark:bg-light-black">
        <div className={`flex px-[100px] w-full`}>
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
