"use client"

import React, { useEffect, useState } from 'react'
import { useMessageContext } from '../app/provider'

const Message = () => {
  const { message, type } = useMessageContext()
  const [visible, setVisible] = useState(false)

  message && setTimeout(() => {
    setVisible(true)
  }, 1000)

  useEffect (() => {
    setTimeout(() => {
      visible && setVisible(false)
    }, 10000)
  }, [message])

  return (
    <>
      {visible&& (
        <>
        {message && (
          <div className='absolute right-[50px] bottom-[30px] px-7 py-2 text-sm book-shadow shadow-sm'>
            {message}
          </div>
        )}
        </>  
      )}
    </>
  )
}

export default Message