import { scrollToElement } from "./utils"
import PortfolioCarousel from "./PortfolioCarousel"
import { audios } from "./assets/audios"
import ContactForm from "./ContactForm"

export default function PageContent({ content }) {
    const portfolioItems = audios
    
    return (
        <div className="page-content">
            <div id="home-banner" className="home-banner">
                <div className="home-banner-content">
                    <div className="home-banner-title">{content.homeBannerTitle}</div>
                    <div className="home-banner-subtitle">{content.homeBannerSubtitle}</div>
                    <div className="home-banner-button" onClick={() => scrollToElement("portfolio-section")}>{content.homeBannerButton}</div>
                </div>
            </div>
            <div id="our-commitments-section" className="our-commitments">
                <div className="commitment">
                    <div className="commitment-text">
                        <div className="commitment-title">{content.commitments[0].title}</div>
                        <div className="commitment-description">{content.commitments[0].description}</div>
                    </div>
                    <div className="commitment-image"></div>
                </div>
                <div className="commitment">
                    <div className="commitment-image"></div>
                    <div className="commitment-text">
                        <div className="commitment-title">{content.commitments[1].title}</div>
                        <div className="commitment-description">{content.commitments[1].description}</div>
                    </div>
                </div>
                <div className="commitment">
                    <div className="commitment-text">
                        <div className="commitment-title">{content.commitments[2].title}</div>
                        <div className="commitment-description">{content.commitments[2].description}</div>
                    </div>
                    <div className="commitment-image"></div>
                </div>
            </div>
            <div id="portfolio-section">
                <PortfolioCarousel items={portfolioItems} content={content.portfolioCarousel} />
            </div>
            <h2 id="about-us-section">{content.aboutUsTitle}</h2>
            <h2 id="contact-section">{content.contactTitle}</h2>
            <ContactForm content={content.contactForm} />
        </div>
    )
}