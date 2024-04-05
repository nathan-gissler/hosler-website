import HomeBanner from "./HomeBanner"
import OurCommitments from "./OurCommitments"
import CommitmentsItem from "./CommitmentsItem"
import PortfolioCarousel from "./PortfolioCarousel"
import { audios } from "./assets/audios"
import ContactForm from "./ContactForm"

export default function PageContent({ content }) {
    const portfolioItems = audios
    
    return (
        <div className="page-content">
            <HomeBanner content={content.homeBanner} />
            <OurCommitments>
                <CommitmentsItem invertedLayout={false} content={content.commitments[0]} />
                <CommitmentsItem invertedLayout={true} content={content.commitments[1]} />
                <CommitmentsItem invertedLayout={false} content={content.commitments[2]} />
            </OurCommitments>
            <PortfolioCarousel items={portfolioItems} content={content.portfolioCarousel} />
            <h2 id="about-us-section">{content.aboutUsTitle}</h2>
            <h2 id="contact-section">{content.contactTitle}</h2>
            <ContactForm content={content.contactForm} />
        </div>
    )
}