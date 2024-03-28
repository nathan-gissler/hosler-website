import AudioPlayer from "./AudioPlayer"

export default function PortfolioCard({ trackList, index }) {

    return (
        <div className="portfolio">
            <div className="half-portfolio">
                <div className="porfolio-card-title">CINÉMATIQUE</div>
                <div className="portfolio-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam. Bibendum ut tristique et egestas.</div>
            </div>
            <div className="half-portfolio">
                <AudioPlayer trackList={trackList} index={index} />
            </div>
        </div>
    )
}