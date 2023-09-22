"use client"

import Inputs from "@/components/Inputs";
import Link from "next/link";
import React from "react";

const Signup = () => {
  const handleChange = async () => {
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-light-black">
      <div className="w-[480px] shadow border-[1px] border-[#27272721] dark:border-[#cecece11] px-[40px] py-[40px]">
        <h1 className="text-blue font-semibold text-center text-2xl mb-8">
          SIGNUP
        </h1>

        <form className="flex flex-col gap-5">
          <Inputs
            type="text"
            placeholder="Username"
            name="name"
            onchange={handleChange}
          />
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
            Already have an account?{" "}
            <Link className="underline text-blue cursor-pointer font-medium" href="/login">
              Login
            </Link>
          </p>

          <button className="px-7 py-2 text-white bg-blue rounded mt-3">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
