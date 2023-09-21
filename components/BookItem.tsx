import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

interface BookItemProps {
  type?: string;
}

const BookItem = ({ type }: BookItemProps) => {
  return (
    <div className="w-[412px] h-[225px] rounded flex book-shadow shadow-sm">
      <Image
        src="/richdadpoordad.webp"
        alt="richdadpoordad"
        width={154}
        className="border-t rounded"
        objectFit="contain"
        height={225}
      />

      <div className="flex flex-col gap-2 px-[15px] py-[15px] justify-between">
        <h2 className="text-lg text-black font-semibold dark:text-white">
          Rich Dad Poor Dad
        </h2>

        <div>
          <h6 className="text-black-light font-medium text-sm dark:text-medium-light">
            Robert T Kiyosaki
          </h6>
          <p className="text-light-white text-xs">Business & Money</p>
        </div>

        {type !== 'collection' && (
            <h1 className="text-xl text-green font-semibold">$5</h1>
        )}

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {type === "collection" ? (
              <button className="px-3 py-1 rounded bg-blue text-white font-medium text-xs">
                Download
              </button>
            ) : type === "cart" ? (
              <button className="px-3 py-1 rounded bg-red text-white font-medium text-xs">
                Remove
              </button>
            ) : ''}
            {type === "wishlist" ? (
              <FcLike size={20} className="cursor-pointer" />
            ) : type === "bookstore" ? (
              <AiOutlineHeart size={20} className="cursor-pointer" />
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
