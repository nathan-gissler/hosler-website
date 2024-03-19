import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard() {
    const trackList = ["src/assets/audios/Chase MG.wav", "src/assets/audios/The Goddess.wav", "src/assets/audios/This Journey Ahead.wav"]

    return (
        <div className="portfolio">
            <div className="portfolio-horiz-align">
                <div className="half-portfolio"></div>
                <div className="half-portfolio">
                    <AudioPlayer trackList={trackList} />
                </div>
            </div>
        </div>
    )
}