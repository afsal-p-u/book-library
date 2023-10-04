"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuLibrary } from 'react-icons/lu'
import { BsBookmarkStar, BsCollection } from 'react-icons/bs'

const Navbar = () => {
  const [showSignout, setShowSignout] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      <div
        className="w-full py-5 bg-white dark:bg-light-black flex items-center pl-[30px] 
          justify-between mb-4 max-lg:mb-1 pe-[100px] max-xl:pe-[60px] max-lg:pe-[40px] max-md:hidden"
      >
        {/* categories */}
        <ul className="text-black dark:text-white flex gap-3 items-center">
          <Link
            href={"/"}
            className={`font-medium text-sm max-lg:text-xs cursor-pointer text-light-black dark:text-medium-light
            ${pathname === "/" && "font-semibold text-black dark:text-white"}`}
          >
            Book Store
          </Link>
          <Link
            href={"/wishlist"}
            className={`font-medium text-sm max-lg:text-xs text-light-black 
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
            className={`font-medium text-sm max-lg:text-xs text-light-black dark:text-medium-light cursor-pointer
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

            <p className="text-sm max-lg:text-xs text-light-black dark:text-light-white">
              Hi,{" "}
              <span className="font-semibold text-black dark:text-white capitalize">
                {session?.user?.name}
              </span>
            </p>
            
            {showSignout && (
              <div className="absolute top-10">
                <button
                  onClick={() => signOut()}
                  className="px-5 py-2 text-sm max-lg:text-xs text-red bg-black dark:bg-medium-light rounded 
                  font-semibold"
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* for medium device navbar to bottom bar component */}
      <div 
        className="fixed bottom-0 left-0 w-[100%] py-2 bg-white dark:bg-light-black shadow-lg hidden max-md:flex
        items-center px-[30px] justify-between"
      >
        <Link href="/">
          <div className="flex flex-col items-center gap-1">
            <LuLibrary size={20} />
            <span className="text-[10px] font-medium">Store</span>
          </div>
        </Link>
        <Link href={'/wishlist'}>
          <div className="flex flex-col items-center gap-1">
            <BsBookmarkStar size={18} />
            <span className="text-[10px] font-medium">Wishlist</span>
          </div>
        </Link>
        <Link href="/collection">
          <div className="flex flex-col items-center gap-1">
            <BsCollection size={18} />
            <span className="text-[10px] font-medium">Collection</span>
          </div>
        </Link>
        <Link href="/cart">
          <div className="flex flex-col items-center gap-1">
            <AiOutlineShoppingCart size={21} />
            <span className="text-[10px] font-medium">Cart</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
