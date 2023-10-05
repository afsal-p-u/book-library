"use client";

import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import { BooksType } from "@/utils/types";
import { useSearchContext } from "@/providers/SearchProvider";
import { useMessageContext } from "@/providers/MessageProvider";

const Books = () => {
  const [items, setItems] = useState<BooksType[]>([]);
  const { search } = useSearchContext();
  const { setMessage, setType } = useMessageContext();

  
  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(`api/book`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
  
      if (res.ok) {
        setItems(data.books);
      } else {
        setMessage(data.message);
        setType("error");
      }
    };
    
    getBooks();
  }, []);

  return (
    <div className="mt-5 flex gap-5 flex-wrap w-full">
      {search ? (
        <>
          {items
            ?.filter((item) =>
              item?.title?.toLowerCase()?.includes(search?.toLowerCase())
            )
            ?.map((items, i) => {
              return <BookItem type="bookstore" key={i} item={items} />;
            })}
        </>
      ) : (
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
