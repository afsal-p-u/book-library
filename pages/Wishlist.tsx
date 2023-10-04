"use client";

import { useSearchContext } from "@/app/provider";
import BookItem from "@/components/BookItem";
import { BooksType } from "@/utils/types";
import React, { useState } from "react";
import { useEffect } from "react";

const Wishlist = () => {
  const [items, setItems] = useState<BooksType[] | null>(null);
  const [changes, _setChanges] = useState(false);
  const { search } = useSearchContext();

  const setChanges = () => {
    _setChanges((prev) => !prev);
  };

  const getWishlistItems = async () => {
    const res = await fetch(`/api/wishlist/${"zenitsu@gmail.com"}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setItems(data.data);
    } else {
      console.log("Error");
    }
  };
  console.log(items);
  useEffect(() => {
    getWishlistItems();
  }, [changes]);

  return (
    <div className="pl-[30px] pe-[100px] max-md:mt-[70px] max-md:min-h-[100vh]">
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        {search ? (
          <>
            {items
              ?.filter((item) =>
                item?.title?.toLowerCase()?.includes(search?.toLowerCase())
              )
              ?.map((items, i) => {
                return <BookItem type="wishlist" key={i} item={items} changes={setChanges} />;
              })}
          </>
        ) : (
          <>
            {items?.map((item, i) => (
              <BookItem
                type="wishlist"
                item={item}
                key={i}
                changes={setChanges}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
