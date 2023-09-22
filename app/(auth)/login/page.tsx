import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Login from '@/pages/Login'
import React from 'react'
import { redirect } from 'next/navigation'

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/')
  } 

  return <Login />
}

export default page
