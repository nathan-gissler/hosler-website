import { useState, useEffect } from "react"
import { scrollToElement } from "./utils.js"
import HeaderNavbar from "./HeaderNavbar.jsx"
import HeaderNavItem from "./HeaderNavItem.jsx"
import LanguageMenu from "./LanguageMenu.jsx"
import LogoHosler from "./assets/logos/logo-hosler-white.svg"

export default function Header({ content }) {
    // Getting values from CSS
    const fullHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--header-full-height").slice(0, -2), 10)
    const reducedHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--header-reduced-height").slice(0, -2), 10)

    const [isReduced, setIsReduced] = useState(false)
    const [height, setHeight] = useState(fullHeight)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > fullHeight) {
                setIsReduced(true)
            } else {
                setIsReduced(false)
            }
            setHeight(Math.max(fullHeight - scrollY, reducedHeight))
        }

        addEventListener('scroll', handleScroll)

        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id="header" className={isReduced ? "reduced" : ""} style={{height: height + 'px'}}>
            <img className="header-logo-hosler highlight-on-hover" src={LogoHosler} alt="" onClick={() => scrollToElement("home-banner")} />
            <HeaderNavbar>
                <HeaderNavItem title={content.navItemHome} element="home-banner" nextElement="our-commitments-section" />
                <HeaderNavItem title={content.navItemCommitments} element="our-commitments-section" nextElement="portfolio-section" />
                <HeaderNavItem title={content.navItemPortfolio} element="portfolio-section" nextElement="about-us-section" />
                <HeaderNavItem title={content.navItemAboutUs} element="about-us-section" nextElement="contact-section" />
                <HeaderNavItem title={content.navItemContact} element="contact-section" />
            </HeaderNavbar>
            <LanguageMenu/>
        </div>
    )
}