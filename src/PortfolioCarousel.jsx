import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import ArrowLeft from "./assets/icons/arrow-left.svg"
import ArrowRight from "./assets/icons/arrow-right.svg"
import DotFilled from "./assets/icons/dot-filled.svg"
import DotEmpty from "./assets/icons/dot-empty.svg"

export default function PortfolioCarousel({ items, content }) {
    let cards = items.map((musicStyleId, index) => (
        <div className="carousel-card" key={index}>
            <PortfolioCard musicStyleId={musicStyleId} index={index} content={content[musicStyleId]} />
        </div>
    ))

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % items.length)
    }

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length)
    }

    let dots = items.map((t, index) => (
        <img src={index === currentIndex ? DotFilled : DotEmpty} alt="" key={index} />
    ))

    const carouselStyle = {
        width: `${items.length * 100}%`,
        transform: `translateX(-${currentIndex / items.length * 100}%)`,
    }

    return (
        <div id="portfolio-section" className="carousel-wrapper">
            <div onClick={handlePrevClick} className="carousel-button carousel-prev highlight-on-hover">
                <img src={ArrowLeft} alt="" />
            </div>
            <div onClick={handleNextClick} className="carousel-button carousel-next highlight-on-hover">
                <img src={ArrowRight} alt="" />
            </div>
            <div className="carousel-dots">
                {dots}
            </div>
            <div className="carousel" style={carouselStyle}>
                {cards}
            </div>
        </div>
    )
}