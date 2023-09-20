import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full h-[10vh] bg-white dark:bg-light-black flex items-center pl-[30px] 
        justify-between mb-4 pe-[100px]"
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
        <Image src="/user.jpg" alt="user" width={30} height={30} className="rounded-full" />

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
