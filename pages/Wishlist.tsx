"use client"

import BookItem from '@/components/BookItem'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Wishlist = () => {
  const [items, setItems] = useState<any [] | null>(null)
  const [changes, setChanges] = useState(false)

  const getWishlistItems = async () => {
    const res = await fetch(`/api/wishlist/${"zenitsu@gmail.com"}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    if (res.ok) {
      setItems(data.data)
    } else {
      console.log("Error")
    }
  }
  useEffect(() => {
    getWishlistItems()
  }, [changes])

  return (
    <div className='pl-[30px] pe-[100px]'>
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        {items?.map((item, i) => (
          <BookItem type='wishlist' item={item} key={i} changes={setChanges}  />
        ))}
      </div>
    </div>
  )
}

export default Wishlist
