import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Message from "./Message";
import { SessionProvider } from "@/providers/SessionProvider";

const AfterAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex w-full dark:bg-light-black`}>
      <div className="w-1/4 max-md:w-0 max-md:bg-blue">
        <Sidebar />
      </div>
      <div className="w-3/4 max-md:w-full">
        <Navbar />
        {children}
        <Message />
      </div>
    </div>
  );
};

export default AfterAuthLayout;
