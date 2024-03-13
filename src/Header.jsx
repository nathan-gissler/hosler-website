import HeaderNavbar from "./HeaderNavbar.jsx"
import HeaderNavItem from "./HeaderNavItem.jsx"
import LogoHosler from "./assets/logos/logo-hosler-white.png"
import { useState, useEffect } from "react"

export default function Header() {
    const [isReduced, setIsReduced] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 10) {
                setIsReduced(true)
            } else {
                setIsReduced(false)
            }
        }

        addEventListener('scroll', handleScroll)

        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id="header" className={isReduced ? "reduced" : ""}>
            <img className="logo-hosler" src={LogoHosler} alt="" />
            <HeaderNavbar>
                <HeaderNavItem title="PORTFOLIO" element="title-portfolio" nextElement="title-1" />
                <HeaderNavItem title="TITRE 1" element="title-1" nextElement="title-2" />
                <HeaderNavItem title="TITRE 2" element="title-2" nextElement="title-3" />
                <HeaderNavItem title="TITRE 3" element="title-3" nextElement="title-4" />
                <HeaderNavItem title="TITRE 4" element="title-4" />
            </HeaderNavbar>
        </div>
    )
}