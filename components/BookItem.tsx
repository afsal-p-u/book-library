"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

interface BookItemProps {
  type?: string;
  item?: any;
  changes?: any
}

const BookItem = ({ type, item, changes }: BookItemProps) => {
  const { data: session } = useSession() || ''

  const addToCart = async () => {
    const res = await fetch(`api/cart`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bookId: item.id, email: session?.user?.email })
    })

    if (res.ok) {
      const data = await res.json()
      console.log('Success')
    } else {
      console.log("Error")
    }
  }

  const handleRemoveFromCart = async () => {
    const res = await fetch(`/api/cart/${item.id}`, { 
      method: "DELETE", headers: { 'Content-Type': 'application/json' 
    } })

    const data = await res.json()
    if (!res.ok) {
      console.log("Error")
      console.log(data)
    } else {
      console.log('Success')
      changes((prev: any) => !prev)
      console.log(data)
    }
  }

  const handleWishlist = async () => {
    const res = await fetch('/api/wishlist', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...item, email: session?.user?.email })
    })

    const data = await res.json()
    if (res.ok) {
      console.log("Success", data)
    } else {
      console.log("Error", data)
    }
  }

  const handleRemoveWishlist = async () => {
    const res = await fetch(`/api/wishlist/${item.id}`, { 
      method: "DELETE", headers: { 'Content-Type': 'application/json' } })

    const data = await res.json()
    if (!res.ok) {
      console.log("Error")
      console.log(data)
    } else {
      console.log('Success')
      changes((prev: any) => !prev)
      console.log(data)
    }
  }

  return (
    <div className="w-[412px] h-[225px] rounded flex book-shadow shadow-sm">
      <Image
        src={item?.image}
        alt="richdadpoordad"
        width={154}
        className="border-t rounded"
        objectFit="contain"
        height={225}
      />

      <div className="flex flex-col gap-2 px-[15px] py-[15px] justify-between">
        <h2 className="text-lg text-black font-semibold dark:text-white">
          {item?.title}
        </h2>

        <div>
          <h6 className="text-black-light font-medium text-sm dark:text-medium-light">
            {item?.author}
          </h6>
          <p className="text-light-white text-xs">{item?.category}</p>
        </div>

        {type !== 'collection' && (
            <h1 className="text-xl text-green font-semibold">${item?.price}</h1>
        )}

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {type === "collection" ? (
              <button className="px-3 py-1 rounded bg-blue text-white font-medium text-xs">
                Download
              </button>
            ) : type === "cart" ? (
              <button 
                className="px-3 py-1 rounded bg-red text-white font-medium text-xs"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
            ) : (
              <button 
                className="px-3 py-1 rounded bg-blue text-white font-medium text-xs"
                onClick={addToCart}
              >
                Add to cart
              </button>
            )}
            {type === "wishlist" ? (
              <FcLike size={20} className="cursor-pointer" onClick={handleRemoveWishlist} />
            ) : type === "bookstore" ? (
              <AiOutlineHeart size={20} className="cursor-pointer" onClick={handleWishlist} />
            ) : ''}
          </div>
          <div className="flex gap-1">
            <Image src="./star.svg" alt="star" width={12} height={12} />
            <Image src="./star.svg" alt="star" width={12} height={12} />
            <Image src="./star.svg" alt="star" width={12} height={12} />
            <Image src="./star.svg" alt="star" width={12} height={12} />
            <Image src="./star.svg" alt="star" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
