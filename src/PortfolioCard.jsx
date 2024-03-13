import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard() {
    return (
        <div className="portfolio">
            <div className="portfolio-horiz-align">
                <div className="half-portfolio"></div>
                <div className="half-portfolio">
                    <AudioPlayer />
                </div>
            </div>
        </div>
    )
}