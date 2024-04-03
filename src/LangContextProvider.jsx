import { createContext, useState } from "react"

export const LangContext = createContext("fr")

export function LangContextProvider({ children }) {
    const [lang, setLang] = useState("fr")

    return (
        <LangContext.Provider value={{updateLang: (newLang) => setLang(newLang), lang}}>
            {children}
        </LangContext.Provider>
    )
}