import { useContext, useState, useEffect } from "react"
import { LangContext } from "./LangContextProvider.jsx"
import FlagFr from "./assets/icons/flag-fr.svg"
import FlagEn from "./assets/icons/flag-fr.svg"

export default function LanguageMenu() {
    const { lang, updateLang } = useContext(LangContext)
    const [flag, setFlag] = useState()

    useEffect(() => {
        if (lang == "fr") {
            setFlag(FlagFr)
        } else {
            setFlag(FlagEn)
        }
    }, [lang])

    function changeLang() {
        if (lang == "fr") {
            updateLang("en")
        } else {
            updateLang("fr")
        }
    }

    return (
        <img className="language-icon" src={flag} alt="" onClick={changeLang} />
    )
}