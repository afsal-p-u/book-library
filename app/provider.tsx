"use client"

//theme provider

import { ThemeProvider as TP } from "next-themes"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <TP attribute="class">{children}</TP>
}


//session provider

import { SessionProvider as SP } from 'next-auth/react'

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    return <SP>{children}</SP>
}