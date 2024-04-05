import { scrollToElement } from "./utils"

export default function HomeBanner({ content }) {
    return (
        <div id="home-banner" className="home-banner">
            <div className="home-banner-content">
                <div className="home-banner-title">{content.homeBannerTitle}</div>
                <div className="home-banner-subtitle">{content.homeBannerSubtitle}</div>
                <div className="home-banner-button" onClick={() => scrollToElement("portfolio-section")}>{content.homeBannerButton}</div>
            </div>
        </div>
    )
}