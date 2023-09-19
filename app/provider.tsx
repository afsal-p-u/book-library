"use client"

import { useState, createContext, useContext } from 'react'

const ThemeContext = createContext({
    theme: 'light',
    setTheme: (value: string) => {}
})

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, _setTheme] = useState(JSON.parse(localStorage?.getItem('theme')!) || 'light')

    const setTheme = (value: string) => {
        localStorage?.setItem('theme', JSON.stringify(value))
        _setTheme(value)
    }

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}
        >{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)