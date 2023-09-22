"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [showSignout, setShowSignout] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

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
          ${pathname === "/" && "font-semibold text-black dark:text-white"}`}
        >
          Book Store
        </Link>
        <Link
          href={"/wishlist"}
          className={`font-medium text-sm text-light-black 
          dark:text-medium-light cursor-pointer
          ${
            pathname === "/wishlist" &&
            "font-semibold text-black dark:text-white"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href="/collection"
          className={`font-medium text-sm text-light-black dark:text-medium-light cursor-pointer
          ${
            pathname === "/collection" &&
            "font-semibold text-black dark:text-white"
          }`}
        >
          My Collections
        </Link>
        <Link href="/cart">
          <AiOutlineShoppingCart
            size={20}
            className={`text-light-black/75 dark:text-medium-light cursor-pointer
            ${
              pathname === "/cart" &&
              "font-semibold text-black/100 dark:text-white"
            }`}
          />
        </Link>
      </ul>

      {/* profile */}
      {session?.user?.name && (
        <div 
          onClick={() => setShowSignout((prev) => !prev)}
          className="flex items-center gap-2 relative cursor-pointer"
        >
          <Image
            src="/user.jpg"
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />

          <p className="text-sm text-light-black dark:text-light-white">
            Hi,{" "}
            <span className="font-semibold text-black dark:text-white capitalize">
              {session?.user?.name}
            </span>
          </p>
          
          {showSignout && (
            <div className="absolute top-10">
              <button
                onClick={() => signOut()}
                className="px-5 py-2 text-sm text-red bg-black dark:bg-medium-light rounded font-semibold"
              >
                SignOut
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
