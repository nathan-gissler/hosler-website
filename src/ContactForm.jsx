export default function ContactForm({ content }) {
    return (
        <div id="contact-section" className="contact-form">
            <input type="text" id="contact-form-name" placeholder={content.nameInput} className="input small" />
            <input type="text" id="contact-form-email" placeholder={content.emailInput} className="input small" />
            <input type="text" id="contact-form-project-type" placeholder={content.projectTypeInput} className="input small" />
            <input type="text" id="contact-form-deadline" placeholder={content.deadlineInput} className="input small" />
            <textarea type="text" id="contact-form-message" placeholder={content.messageInput} className="input large" />
            <div className="contact-form-send-button">{content.sendButton}</div>
        </div>
    )
}