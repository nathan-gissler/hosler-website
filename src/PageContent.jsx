import { scrollToElement } from "./utils"
import PortfolioCarousel from "./PortfolioCarousel"
import { trackList } from "./assets/audios"
import ContactForm from "./ContactForm"

export default function PageContent() {
    const portfolioItems = [trackList, trackList, trackList]
    
    return (
        <div className="page-content">
            <div id="home-banner" className="home-banner">
                <div className="home-banner-content">
                    <div className="home-banner-title">CRÉATION MUSICALE D'EXCEPTION</div>
                    <div className="home-banner-subtitle">HOSLER vous accompagne dans votre aventure musicale avec les plus hauts standards</div>
                    <div className="home-banner-button" onClick={() => scrollToElement("portfolio-section")}>Écouter</div>
                </div>
            </div>
            <div id="our-commitments-section" className="our-commitments">
                <div className="commitment">
                    <div className="commitment-text">
                        <div className="commitment-title">Imposez votre vision, exigez la meilleure qualité</div>
                        <div className="commitment-description">Nous nous adaptons aux besoins et exigences de nos clients, en termes de qualité et de délai</div>
                    </div>
                    <div className="commitment-image"></div>
                </div>
                <div className="commitment">
                    <div className="commitment-image"></div>
                    <div className="commitment-text">
                        <div className="commitment-title">Nous proposons un service complet</div>
                        <div className="commitment-description">Notre domaine d'expertise s'étend de la composition au mastering, en passant par l'arrangement et le mixage</div>
                    </div>
                </div>
                <div className="commitment">
                    <div className="commitment-text">
                        <div className="commitment-title">La polyvalence est notre maître-mot</div>
                        <div className="commitment-description">Nous avons à coeur de travailler dans tous les styles musicaux, à tous les niveaux, avec la même rigueur</div>
                    </div>
                    <div className="commitment-image"></div>
                </div>
            </div>
            <div id="portfolio-section">
                <PortfolioCarousel items={portfolioItems} />
            </div>
            <h2 id="about-us-section">ABOUT US</h2>
            <h2 id="contact-section">CONTACT</h2>
            <ContactForm/>
        </div>
    )
}