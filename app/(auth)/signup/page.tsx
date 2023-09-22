"use client"

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signup from '@/pages/Signup'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/')
  } 

  return <Signup />
}

export default page
