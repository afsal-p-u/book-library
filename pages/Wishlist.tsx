import BookItem from '@/components/BookItem'
import React from 'react'

const Wishlist = () => {
  return (
    <div className='pl-[30px] pe-[100px]'>
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        <BookItem type='wishlist' />
      </div>
    </div>
  )
}

export default Wishlist
