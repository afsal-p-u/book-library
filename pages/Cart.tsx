"use client";

import BookItem from "@/components/BookItem";
import PaymentOrder from "@/components/PaymentOrder";
import { useSearchContext } from "@/providers/SearchProvider";
import { BooksType } from "@/utils/types";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const { data: session } = useSession() || "";
  const [items, setItems] = useState<BooksType[] | null>(null);
  const [changes, _setChanges] = useState(false);
  const { search } = useSearchContext();

  const setChanges = () => {
    _setChanges((prev) => !prev);
  };

  const getItems = async () => {
    const res = await fetch(`api/cart/${session?.user?.email}`, {
      method: "GET",
    });

    if (!res.ok) {
      console.log("Error");
    } else {
      const data = await res.json();
      setItems(data?.cart);
    }
  };

  useEffect(() => {
    getItems();
  }, [changes, session]);

  return (
    <div className="pl-[30px] pe-[100px] max-md:mt-[70px] max-md:min-h-[100vh]">
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        <div className="flex flex-col gap-5">
          {search ? (
            <>
              {items
                ?.filter((item) =>
                  item?.title?.toLowerCase()?.includes(search?.toLowerCase())
                )
                ?.map((items, i) => {
                  return <BookItem type="cart" key={i} item={items} changes={setChanges} />;
                })}
            </>
          ) : (
            <>
              {items?.map((item: BooksType, i: number) => (
                <BookItem
                  type="cart"
                  item={item}
                  key={i}
                  changes={setChanges}
                />
              ))}
            </>
          )}
        </div>

        <PaymentOrder cartItems={items} />
      </div>
    </div>
  );
};

export default Cart;
