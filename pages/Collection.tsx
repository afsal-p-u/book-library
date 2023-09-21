import BookItem from '@/components/BookItem'
import React from 'react'

const Collection = () => {
  return (
    <div className='pl-[30px] pe-[100px]'>
      <div className="mt-5 flex gap-5 flex-wrap w-full justify-between">
        <BookItem type='collection' />
      </div>
    </div>
  )
}

export default Collection
