import Books from "@/components/Books";
import React from "react";

const Dashboard = () => {
  return (
    <div className="pl-[30px] pe-[100px]">
      <ul className="flex gap-5">
        <li className="text-black dark:text-white font-medium text-xl cursor-pointer">
          For You
        </li>
        <li className="text-light-black dark:text-light-white font-normal text-xl cursor-pointer">
          New Release
        </li>
      </ul>

      <Books />
    </div>
  );
};

export default Dashboard;
