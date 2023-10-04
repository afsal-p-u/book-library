"use client"

import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { BooksType } from "@/utils/types";
import { useMessageContext, useSearchContext } from "@/app/provider";

const Books = () => {
  const [items, setItems] = useState<BooksType[]>()
  const { search } = useSearchContext()
  const { setMessage, setType } = useMessageContext()

  const getBooks = async () => {
    const res = await fetch(`api/book`, { method: "GET" })
    const data = await res.json()

    if (res.ok) {
      setItems(data.books)
    } else {
      setMessage(data.message)
      setType('error')
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="mt-5 flex gap-5 flex-wrap w-full">
      {search ? (
        <>
          {items?.filter((item) => item?.title?.toLowerCase()?.includes(search?.toLowerCase()))?.map((items, i) => { 
            return (
            <BookItem type="bookstore" key={i} item={items} />
          )
          })}
        </>
      ): (
        <>
          {items?.map((item: BooksType, i: number) => (
            <BookItem type="bookstore" key={i} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Books;
