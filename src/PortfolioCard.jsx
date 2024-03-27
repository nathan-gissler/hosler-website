import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard({ trackList, index }) {

    return (
        <div className="portfolio">
            <div className="portfolio-horiz-align">
                <div className="half-portfolio"></div>
                <div className="half-portfolio">
                    <AudioPlayer trackList={trackList} index={index} />
                </div>
            </div>
        </div>
    )
}