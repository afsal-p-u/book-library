"use client"

import BookItem from "@/components/BookItem";
import PaymentOrder from "@/components/PaymentOrder";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState<any [] | null>(null)
  const [changes, setChanges] = useState(false)
  const { data: session } = useSession() || ''

  const getItems = async () => {
    const res = await fetch(`api/cart/${session?.user?.email}`, { method: "GET" })

    if (!res.ok) {
      console.log("Error")
    } else {
      const data = await res.json()
      setItems(data?.cart)
    }
  }

  useEffect(() => {
    getItems()
  }, [changes, session])

  return (
    <div className="pl-[30px] pe-[100px]">
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        <div className="flex flex-col gap-5">
          {items?.map((item: any, i:number) => (
          <BookItem type="cart" item={item} key={i} changes={setChanges} />
          ))}
        </div>
 
        <PaymentOrder cartItems={items} />
      </div>
    </div>
  );
};

export default Cart;
