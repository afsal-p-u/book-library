"use client"

import { useMessageContext } from '@/providers/MessageProvider'
import React, { useEffect, useState } from 'react'

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
  }, [message, visible])

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
