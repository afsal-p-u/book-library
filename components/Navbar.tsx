import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full h-[10vh] bg-white dark:bg-light-black flex items-center pl-[30px] 
      justify-between mb-4"
    >
      {/* categories */}
      <ul className="text-black dark:text-white flex gap-3">
        <Link href={"/"} className="font-medium text-sm cursor-pointer">
          Book Store
        </Link>
        <Link
          href={"/wishlist"}
          className="font-normal text-sm text-light-black 
        dark:text-medium-light cursor-pointer"
        >
          Wishlist
        </Link>
        <Link
          href="/collection"
          className="font-normal text-sm text-light-black dark:text-medium-light cursor-pointer"
        >
          My Collections
        </Link>
      </ul>

      {/* profile */}
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] cursor-pointer border rounded-full"></div>

        <p className="text-sm text-light-black dark:text-light-white">
          Hi,{" "}
          <span className="font-semibold text-black dark:text-white">
            Zenitsu
          </span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
