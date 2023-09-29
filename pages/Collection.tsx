"use client"

import BookItem from '@/components/BookItem'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Collection = () => {
  const [items, setItems] = useState<any [] | null>(null)
  const { data: session } = useSession() || ''

  const getCollections = async () => {
    const res = await fetch(`/api/collection/${session?.user?.email}`, {
      method: "GET"
    })

    const data = await res.json()
    if (res.ok) {
      setItems(data.data)
    } else {
      console.log("Error", data.message)
    }
  }

  useEffect(() => {
    getCollections()
  }, [])

  return (
    <div className='pl-[30px] pe-[100px]'>
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        {items?.map((item, i) => (
        <BookItem type='collection' item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Collection
