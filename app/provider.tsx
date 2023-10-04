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


//message provider
import { createContext, useContext, useState, useEffect } from "react"

interface MessageType {
    message: string | null,
    setMessage: (value: string | null) => void,
    type: string | null,
    setType: (value: string | null) => void,
}

const MessageContext = createContext<MessageType>({
    message: null,
    setMessage: () => {},
    type: null,
    setType: () => {}, 
})

export const MessageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [message, _setMessage] = useState<string | null>(null)
    const [type, _setType] = useState<string | null>(null)

    const setMessage = (value: string | null) => {
        _setMessage(value);
    }
    const setType = (value: string | null) => {
        _setType(value);
    }

    useEffect(() => {
        setTimeout(() => {
            _setMessage(null)
            _setType(null)
        }, 10000)
    }, [message])

    return <MessageContext.Provider value={{ message, setMessage, type, setType }}>{children}</MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext)


//search provider

interface SearchType {
    search: string | null,
    setSearch: (value: string | null) => void
}

const SearchContext = createContext<SearchType>({
    search: null,
    setSearch: () => {}
})

export const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [search, _setSearch] = useState<string | null>(null)

const setSearch = (value: string | null) => {
    _setSearch(value);
}

return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext)
