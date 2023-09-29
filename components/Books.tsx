"use client"

import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";

const Books = () => {
  const [items, setItems] = useState<any [] | null>(null)

  const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/book`, { method: "GET" })

    const data = await res.json()

    if (res.ok) {
      console.log('success')
      setItems(data.books)
    } else {
      console.log('error')
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
      {items?.map((item: any, i: number) => (
        <BookItem type="bookstore" key={i} item={item} />
      ))}
    </div>
  );
};

export default Books;
