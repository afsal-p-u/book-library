import Books from "@/components/Books";
import React from "react";

const Dashboard = () => {
  return (
    <div className="pl-[30px] pe-[100px] max-xl:pe-[60px] max-lg:pe-[40px] max-md:mt-[70px] max-md:min-h-[100vh]">
      <ul className="flex gap-5 mt-5 max-lg:mt-1">
        <li 
          className="text-black dark:text-white font-semibold text-xl cursor-pointer max-lg:text-lg"
        >
          For You
        </li>
        <li 
          className="text-light-black/90 dark:text-light-white font-medium text-xl cursor-pointer max-lg:text-lg"
        >
          New Release
        </li>
      </ul>
      
      <Books />
    </div>
  );
};

export default Dashboard;
