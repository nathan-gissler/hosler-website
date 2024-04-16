export function getElementScrollPosition(elementId) {
    const element = document.getElementById(elementId)
    const top = element.getBoundingClientRect().top + scrollY
    const marginTop = parseFloat(getComputedStyle(element).marginTop)
    const elementY = top - marginTop
    const header = document.getElementById("header")
    const headerBottom = header.getBoundingClientRect().bottom
    return elementY - headerBottom
}

export function scrollToElement(element) {
    // Getting current height
    const header = document.getElementById("header")
    const headerHeight = header.getBoundingClientRect().bottom

    // Getting values from CSS
    const headerFullHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--header-full-height").slice(0, -2), 10)
    const headerReducedHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--header-reduced-height").slice(0, -2), 10)

    const scrollPosition = getElementScrollPosition(element)
    if (scrollPosition <= headerFullHeight) {
        scrollTo(0, scrollPosition + headerHeight - headerFullHeight)
    } else {
        scrollTo(0, scrollPosition + headerHeight - headerReducedHeight)
    }
}

export function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
}

export function camelCaseToKebabCase(string) {
    return string.replace(/[A-Z]/, letter => `-${letter.toLowerCase()}`)
}