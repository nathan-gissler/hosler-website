import { useState, useEffect } from "react"

export default function HeaderNavItem(props) {

    const [className, setClassName] = useState('header-navbar-item highlight-on-hover')

    function getElementScrollPosition(elementId) {
        var element = document.getElementById(elementId)
        var top = element.getBoundingClientRect().top + scrollY
        var marginTop = parseFloat(getComputedStyle(element).marginTop)
        var elementY = top - marginTop
        var header = document.getElementById("header")
        var headerBottom = header.getBoundingClientRect().bottom
        return elementY - headerBottom
    }

    function scrollToElement() {
        scrollTo(0, getElementScrollPosition(props.element))
    }

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
        onClick={() => scrollToElement()}>
            {props.title}
            </div>
    )
}