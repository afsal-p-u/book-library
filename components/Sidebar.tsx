"use client";

import { useSearchContext } from "@/providers/SearchProvider";
import { useTheme } from "next-themes";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Sidebar = () => {
  const { setTheme } = useTheme();
  const { setSearch } = useSearchContext();
  
  return (
    <>
      <div
        className={`w-full h-screen py-5 px-[10px] bg-white dark:bg-light-black ps-[100px]
        max-xl:ps-[60px] max-lg:ps-[40px] max-md:hidden`}
      >
        {/* name and theme control */}
        <div className="flex justify-between items-center mb-10 max-lg:flex-col max-lg:items-start">
          <h1
            className="text-2xl font-bold text-black dark:text-white
            max-lg:text-xl max-md:text-lg"
          >
            <span className="text-blue">Book</span>Elysium
          </h1>

          <div
            className="w-[40px] h-[20px] rounded-full border-[1px] 
              border-shadow-dark/50 flex dark:border-shadow-light/50
              max-xl:w-[36px] max-xl:h-[18px] max-lg:w-[30px] max-lg:h-[15px] max-lg:mt-2"
          >
            <div
              className={`w-[20px] h-full bg-black rounded-full cursor-pointer dark:bg-light-black
              max-xl:w-[18px] max-lg:w-[15px]`}
              onClick={() => setTheme("light")}
            ></div>
            <div
              className={`w-[20px] h-full bg-white rounded-full cursor-pointer dark:bg-white
              max-xl:w-[18px] max-lg:w-[15px]`}
              onClick={() => setTheme("dark")}
            ></div>
          </div>
        </div>

        {/* searchbox */}
        <div
          className="mt-5 px-5 py-2 flex items-center rounded-[5px] shadow-sm border-[1px] 
            border-shadow-light/50 max-lg:px-3"
        >
          <input
            type="search"
            className={`outline-none text-xs w-full dark:bg-light-black dark:text-white`}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch className="text-light-white cursor-pointer" />
        </div>

        {/* categories */}
        <div className="mt-5">
          <h6
            className="font-semibold text-black text-lg dark:text-white 
            max-lg:text-sm"
          >
            Popular Topics
          </h6>
          <div
            className="mt-2 flex flex-col gap-1 text-sm 
            max-lg:text-xs"
          >
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Children&apos;s books
            </p>
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Business & Money
            </p>
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Self help
            </p>
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Computer & Technology
            </p>
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Archetecture
            </p>
            <p className="text-light-black cursor-pointer dark:text-medium-light font-medium">
              Programming
            </p>
          </div>
        </div>
      </div>

      {/* medium device sidebar to navbar component */}
      <div 
        className="fixed hidden top-0 left-0 w-[100%] py-2 max-md:flex shadow-md px-[30px] bg-white
         dark:bg-light-black justify-between"
      >
        <div className="rounded border-[1px] book-shadow flex gap-2 items-center px-7">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="py-2 outline-none text-xs bg-[#eee0]"
            placeholder="Search..."
          />
          <BsSearch className="text-light-white cursor-pointer=" />
        </div>

        <div
          className="w-[40px] h-[20px] rounded-full border-[1px] 
              border-shadow-dark/50 flex dark:border-shadow-light/50
              max-xl:w-[36px] max-xl:h-[18px] max-lg:w-[30px] max-lg:h-[15px] max-lg:mt-2"
        >
          <div
            className={`w-[20px] h-full bg-black rounded-full cursor-pointer dark:bg-light-black
              max-xl:w-[18px] max-lg:w-[15px]`}
            onClick={() => setTheme("light")}
          ></div>
          <div
            className={`w-[20px] h-full bg-white rounded-full cursor-pointer dark:bg-white
              max-xl:w-[18px] max-lg:w-[15px]`}
            onClick={() => setTheme("dark")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
