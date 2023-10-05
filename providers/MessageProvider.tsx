"use client"

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
