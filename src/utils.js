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
    scrollTo(0, getElementScrollPosition(element))
}

export function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
}