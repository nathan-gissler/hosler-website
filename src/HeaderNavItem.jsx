import { useState, useEffect } from "react"
import { getElementScrollPosition, scrollToElement } from "./utils"

export default function HeaderNavItem(props) {

    const [className, setClassName] = useState('header-navbar-item highlight-on-hover')

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY >= getElementScrollPosition(props.element) && (!props.nextElement || scrollY < getElementScrollPosition(props.nextElement))) {
                setClassName('header-navbar-item highlight-on-hover is-selected')
            } else {
                setClassName('header-navbar-item highlight-on-hover')
            }
        }
        addEventListener('scroll', handleScroll)
        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={className}
        onClick={() => scrollToElement(props.element)}>
            {props.title}
            </div>
    )
}