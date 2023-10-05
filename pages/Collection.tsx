"use client"

import BookItem from '@/components/BookItem'
import { useSearchContext } from '@/providers/SearchProvider'
import { BooksType } from '@/utils/types'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Collection = () => {
  const [items, setItems] = useState<BooksType [] | null>(null)
  const { data: session } = useSession() || ''
  const { search } = useSearchContext()

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

  // useEffect(() => {
  //   getCollections()
  // }, [getCollections])

  return (
    <div className='pl-[30px] pe-[100px] max-xl:pe-[60px] max-lg:pe-[40px] max-md:pl-[0px] max-md:mt-[70px] max-md:min-h-[100vh]'>
      <div className="mt-5 flex gap-5 flex-wrap w-full max-lg:justify-center">
        {search ? (
          <>
            {items?.filter((item) => item?.title?.toLowerCase()?.includes(search?.toLowerCase()))?.map((items, i) => { 
              return (
              <BookItem type="collection" key={i} item={items} />
            )
            })}
          </>
        ) : (
          <>
            {items?.map((item, i) => (
              <BookItem type='collection' item={item} key={i} />
            ))}
          </>   
        )}
      </div>
    </div>
  )
}

export default Collection
