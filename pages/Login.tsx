"use client"

import Inputs from '@/components/Inputs'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type LoginTypes = {
  email: string,
  password: string
}

const Login = () => {
  const [inputs, setInputs] = useState<LoginTypes | null>(null)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev: LoginTypes | any) => {
      return { ...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await signIn('credentials', { ...inputs, redirect: false })

    if (res?.error) {
      console.log("Invalid credentials")
      return
    }

    router.replace('/')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-light-black">
      <div className="w-[480px] shadow border-[1px] border-[#27272721] dark:border-[#cecece11] px-[40px] py-[40px]">
        <h1 className="text-blue font-semibold text-center text-2xl mb-8">
          LOGIN
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Inputs
            type="email"
            placeholder="Email"
            name="email"
            onchange={handleChange}
          />
          <Inputs
            type="password"
            placeholder="Password"
            name="password"
            onchange={handleChange}
          />

          <p className="text-end text-xs text-light-black dark:text-medium-light">
            Don&apos;t have an account?{" "}
            <Link className="underline text-blue cursor-pointer font-medium" href="/signup">
              Signup
            </Link>
          </p>

          <button className="px-7 py-2 text-white bg-blue rounded mt-3">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
