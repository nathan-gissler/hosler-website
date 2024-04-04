import { useContext, useState, useEffect } from "react"
import { LangContext } from "./LangContextProvider.jsx"
import FlagFr from "./assets/icons/flag-fr.svg"
import FlagEn from "./assets/icons/flag-en.svg"

export default function LanguageMenu() {
    const { lang, updateLang } = useContext(LangContext)
    const [flag, setFlag] = useState()

    useEffect(() => {
        if (lang == "fr") {
            setFlag(FlagEn)
        } else {
            setFlag(FlagFr)
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
        <img className="language-icon enlarge-on-hover" src={flag} alt="" onClick={changeLang} />
    )
}