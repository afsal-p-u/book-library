import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BookItem from "@/components/BookItem";
import { getServerSession } from "next-auth";
import React from "react";

const Cart = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  const res = await fetch(`${process.env.SERVER_URL}/cart/${email}`, { method: "GET" })
  if (!res.ok) {
    console.log("Error")
  } 
  
  const data = await res.json()

  return (
    <div className="pl-[30px] pe-[100px]">
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        <div className="flex flex-col gap-5">
          {data?.data?.map((item: any, i:number) => (
          <BookItem type="cart" item={item} key={i} />
          ))}
        </div>
 
        <div className="">
          hai
        </div>
      </div>
    </div>
  );
};

export default Cart;
