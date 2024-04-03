import { useContext, useState, useEffect } from "react"
import { LangContext } from "./LangContextProvider.jsx"
import Header from "./Header.jsx"
import PageContent from "./PageContent.jsx"
import Footer from "./Footer.jsx"
import "./styles.css"
import ContentFr from "./content/fr.json"
import ContentEn from "./content/en.json"

export default function App() {
  const { lang } = useContext(LangContext)
  const [content, setContent] = useState(ContentFr)

  useEffect(() => {
    if (lang == "fr") {
      setContent(ContentFr)
    } else if (lang == "en") {
      setContent(ContentEn)
    }
  }, [lang])

  return (
    <div>
      <Header content={content.header} />
      <PageContent content={content.pageContent} />
      <Footer content={content.footer} />
    </div>
  )
}