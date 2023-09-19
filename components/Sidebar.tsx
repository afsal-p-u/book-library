import { useThemeContext } from "@/app/provider";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Sidebar = () => {
  const { setTheme } = useThemeContext();

  return (
    <div
      className={`w-full h-screen py-5 px-[10px] bg-white dark:bg-light-black`}
    >
      {/* name and theme control */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          <span className="text-blue">Book</span>Elysium
        </h1>

        <div
          className="w-[40px] h-[20px] rounded-full border-[1px] 
          border-shadow-dark/50 flex dark:border-shadow-light/50"
        >
          <div
            className={`w-[20px] h-full bg-black rounded-full cursor-pointer dark:bg-light-black`}
            onClick={() => setTheme("light")}
          ></div>
          <div
            className={`w-[20px] h-full bg-white rounded-full cursor-pointer dark:bg-white`}
            onClick={() => setTheme("dark")}
          ></div>
        </div>
      </div>

      {/* searchbox */}
      <div
        className="mt-4 px-5 py-2 flex items-center rounded-[5px] shadow-sm border-[1px] 
        border-shadow-light/50"
      >
        <input
          type="search"
          className={`outline-none text-xs w-full dark:bg-light-black dark:text-white`}
          placeholder="Search"
        />
        <BsSearch className="text-light-white cursor-pointer" />
      </div>

      {/* categories */}
      <div className="mt-5">
        <h6 className="font-medium text-black text-lg dark:text-white">
          Popular Topics
        </h6>
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Children's books
          </p>
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Business & Money
          </p>
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Self help
          </p>
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Computer & Technology
          </p>
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Archetecture
          </p>
          <p className="text-light-black text-sm cursor-pointer dark:text-medium-light">
            Programming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
