import { camelCaseToKebabCase } from "./utils"
import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard({ musicStyleId, index, isCurrentCard, content }) {
    return (
        <div id={camelCaseToKebabCase(musicStyleId)} className="portfolio">
            <div className="portfolio-background"></div>
            <div className="portfolio-content">
                <div className="half-portfolio">
                    <div className="portfolio-card-title-description">
                        <div className="portfolio-title">{content.musicStyleName}</div>
                        <div className="portfolio-description">{content.musicStyleDescription}</div>
                    </div>
                </div>
                <div className="half-portfolio">
                    <AudioPlayer musicStyleId={musicStyleId} index={index} isCurrentPlayer={isCurrentCard} />
                </div>
            </div>
        </div>
    )
}