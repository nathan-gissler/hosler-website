export default function ContactForm() {
    return (
        <div className="contact-form">
            <input type="text" id="contact-form-name" placeholder="Nom" className="input small" />
            <input type="text" id="contact-form-email" placeholder="Email *" className="input small" />
            <input type="text" id="contact-form-project-type" placeholder="Type de projet" className="input small" />
            <input type="text" id="contact-form-deadline" placeholder="Délai" className="input small" />
            <textarea type="text" id="contact-form-message" placeholder="Message *" className="input large" />
            <div className="contact-form-send-button">Envoyer</div>
        </div>
    )
}