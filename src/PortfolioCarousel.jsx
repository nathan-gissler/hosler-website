import { useState } from "react"
import PortfolioCard from "./PortfolioCard"
import PortfolioLastCard from "./PortfolioLastCard"
import ArrowLeft from "./assets/icons/arrow-left.svg"
import ArrowRight from "./assets/icons/arrow-right.svg"
import DotFilled from "./assets/icons/dot-filled.svg"
import DotEmpty from "./assets/icons/dot-empty.svg"

export default function PortfolioCarousel({ items, content }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    let cards = items.map((musicStyleId, index) => (
        <div className="carousel-card" key={index}>
            <PortfolioCard musicStyleId={musicStyleId} index={index} isCurrentCard={currentIndex==index} content={content.portfolioCards[musicStyleId]} />
        </div>
    ))
    cards.push(
        <div className="carousel-card" key={items.length}>
            <PortfolioLastCard content={content.portfolioLastCard} />
        </div>
    )

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % cards.length)
    }

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)
    }

    let dots = cards.map((t, index) => (
        <img className="highlight-on-hover" src={index === currentIndex ? DotFilled : DotEmpty} alt="" key={index} onClick={() => {setCurrentIndex(index)}} />
    ))

    const carouselStyle = {
        width: `${cards.length * 100}%`,
        transform: `translateX(-${currentIndex / cards.length * 100}%)`,
    }

    return (
        <div className="carousel-wrapper">
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