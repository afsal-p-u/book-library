import React from "react";
import BookItem from "./BookItem";

const Books = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/book`, { method: "GET" })
    if (!res.ok) {
      console.log("Error")
      throw new Error("Error occured")
    }

    const items = await res.json()

  return (
    <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
      {items?.books?.map((item: any, i: number) => (
        <BookItem type="bookstore" key={i} item={item} />
      ))}
    </div>
  );
};

export default Books;
