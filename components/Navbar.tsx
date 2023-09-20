"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className="w-full h-[10vh] bg-white dark:bg-light-black flex items-center pl-[30px] 
        justify-between mb-4 pe-[100px]"
    >
      {/* categories */}
      <ul className="text-black dark:text-white flex gap-3 items-center">
        <Link 
          href={"/"} 
          className={`font-medium text-sm cursor-pointer text-light-black dark:text-medium-light
          ${pathname === '/' && 'font-semibold text-black dark:text-white'}`}
        >
          Book Store
        </Link>
        <Link
          href={"/wishlist"}
          className={`font-medium text-sm text-light-black 
          dark:text-medium-light cursor-pointer
          ${pathname === '/wishlist' && 'font-semibold text-black dark:text-white'}`}
        >
          Wishlist
        </Link>
        <Link
          href="/collection"
          className={`font-medium text-sm text-light-black dark:text-medium-light cursor-pointer
          ${pathname === '/collection' && 'font-semibold text-black dark:text-white'}`}
        >
          My Collections
        </Link>
        <Link href="/cart">
          <AiOutlineShoppingCart
            size={20}
            className={`text-light-black/75 dark:text-medium-light cursor-pointer
            ${pathname === '/cart' && 'font-semibold text-black/100 dark:text-white'}`}
          />
        </Link>
      </ul>

      {/* profile */}
      <div className="flex items-center gap-2">
        <Image
          src="/user.jpg"
          alt="user"
          width={30}
          height={30}
          className="rounded-full"
        />

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
