import React from "react";
import { FcLike } from "react-icons/fc";
import Image from "next/image";

const Books = () => {
  return (
    <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
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
            <h6 className="text-black-light text-sm dark:text-medium-light">
              Robert T Kiyosaki
            </h6>
            <p className="text-light-white text-xs">Business & Money</p>
          </div>

          <h1 className="text-xl text-green font-semibold">$5</h1>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 rounded bg-blue text-white font-medium text-xs">
                Add to cart
              </button>
              <FcLike size={20} className="cursor-pointer" />
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

      <div className="w-[412px] h-[225px] rounded flex book-shadow shadow-sm">
        <Image
          src="/atomichabits.webp"
          alt="atomichabits"
          width={154}
          className="border-t rounded"
          objectFit="contain"
          height={225}
        />

        <div className="flex flex-col gap-2 px-[15px] py-[15px] justify-between">
          <h2 className="text-lg text-black font-semibold dark:text-white">
            Atomic Habits
          </h2>

          <div>
            <h6 className="text-black-light text-sm dark:text-medium-light">
              James Clear
            </h6>
            <p className="text-light-white text-xs">Self help</p>
          </div>

          <h1 className="text-xl text-green font-semibold">$5</h1>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 rounded bg-blue text-white font-medium text-xs">
                Add to cart
              </button>
              <FcLike size={20} className="cursor-pointer" />
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

      <div className="w-[412px] h-[225px] rounded flex book-shadow shadow-sm">
        <Image
          src="/leanin15.webp"
          alt="leanin15"
          width={154}
          className="border-t rounded"
          objectFit="contain"
          height={225}
        />

        <div className="flex flex-col gap-2 px-[15px] py-[15px] justify-between">
          <h2 className="text-lg text-black font-semibold dark:text-white">
            Lean in 15 - The Shift Plan
          </h2>

          <div>
            <h6 className="text-black-light text-sm dark:text-medium-light">
              Joe Wicks
            </h6>
            <p className="text-light-white text-xs">Nutrition</p>
          </div>

          <h1 className="text-xl text-green font-semibold">$3</h1>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 rounded bg-blue text-white font-medium text-xs">
                Add to cart
              </button>
              <FcLike size={20} className="cursor-pointer" />
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
    </div>
  );
};

export default Books;
