import HomeBanner from "./HomeBanner"
import OurCommitments from "./OurCommitments"
import CommitmentsItem from "./CommitmentsItem"
import PortfolioCarousel from "./PortfolioCarousel"
import ContactForm from "./ContactForm"

export default function PageContent({ content }) {
    const portfolioItems = ["cinematic", "urban", "popRock", "traditional"]
    
    // remplacer le 2e commitments par <h2 id="about-us-section">{content.aboutUsTitle}</h2>
    return (
        <div className="page-content">
            <HomeBanner content={content.homeBanner} />
            <div id="our-commitments-section" className="title-container">
                <h2>{content.ourCommitmentsTitle}</h2>
            </div>
            <OurCommitments>
                <CommitmentsItem invertedLayout={false} content={content.commitments[0]} />
                <CommitmentsItem invertedLayout={true} content={content.commitments[1]} />
                <CommitmentsItem invertedLayout={false} content={content.commitments[2]} />
            </OurCommitments>
            <div id="portfolio-section" className="title-container">
                <h2>{content.portfolioTitle}</h2>
            </div>
            <PortfolioCarousel items={portfolioItems} content={content.portfolioCarousel} />
            <div id="about-us-section" className="title-container">
                <h2>{content.ourCommitmentsTitle}</h2>
            </div>
            <OurCommitments>
                <CommitmentsItem invertedLayout={false} content={content.commitments[0]} />
                <CommitmentsItem invertedLayout={true} content={content.commitments[1]} />
                <CommitmentsItem invertedLayout={false} content={content.commitments[2]} />
            </OurCommitments>
            <div className="title-container">
                <h2 id="contact-section">{content.contactTitle}</h2>
            </div>
            <ContactForm content={content.contactForm} />
        </div>
    )
}