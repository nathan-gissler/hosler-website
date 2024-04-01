import { useState, useEffect } from "react"
import HeaderNavbar from "./HeaderNavbar.jsx"
import HeaderNavItem from "./HeaderNavItem.jsx"
import LogoHosler from "./assets/logos/logo-hosler-white.svg"
import FlagFr from "./assets/icons/flag-fr.svg"

export default function Header() {
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
                <HeaderNavItem title="HOME" element="home-banner" nextElement="our-commitments-section" />
                <HeaderNavItem title="OUR COMMITMENTS" element="our-commitments-section" nextElement="portfolio-section" />
                <HeaderNavItem title="PORTFOLIO" element="portfolio-section" nextElement="about-us-section" />
                <HeaderNavItem title="ABOUT US" element="about-us-section" nextElement="contact-section" />
                <HeaderNavItem title="CONTACT" element="contact-section" />
            </HeaderNavbar>
            <img className="language-icon" src={FlagFr} alt="" />
        </div>
    )
}