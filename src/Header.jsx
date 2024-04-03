import { useState, useEffect } from "react"
import HeaderNavbar from "./HeaderNavbar.jsx"
import HeaderNavItem from "./HeaderNavItem.jsx"
import LanguageMenu from "./LanguageMenu.jsx"
import LogoHosler from "./assets/logos/logo-hosler-white.svg"

export default function Header({ content }) {
    const [isReduced, setIsReduced] = useState(false)
    const [height, setHeight] = useState(120)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 120) {
                setIsReduced(true)
            } else {
                setIsReduced(false)
            }
            setHeight(Math.max(120 - scrollY, 60))
        }

        addEventListener('scroll', handleScroll)

        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id="header" className={isReduced ? "reduced" : ""} style={{height: height + 'px'}}>
            <img className="header-logo-hosler" src={LogoHosler} alt="" />
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