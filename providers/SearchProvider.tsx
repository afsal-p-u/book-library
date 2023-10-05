"use client"

import { createContext, useContext, useState } from "react"

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
