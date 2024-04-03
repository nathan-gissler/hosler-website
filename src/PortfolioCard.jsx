import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard({ trackList, index, content }) {

    return (
        <div className="portfolio">
            <div className="half-portfolio">
                <div className="porfolio-card-title">{content.musicStyleName}</div>
                <div className="portfolio-card-description">{content.musicStyleDescription}</div>
            </div>
            <div className="half-portfolio">
                <AudioPlayer trackList={trackList} index={index} />
            </div>
        </div>
    )
}