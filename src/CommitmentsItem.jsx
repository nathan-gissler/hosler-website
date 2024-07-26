export default function CommitmentsItem({ invertedLayout, content }) {
    let itemText = (
        <div className={`commitment-text ${invertedLayout ? "align-right" : "align-left"}`}>
            <div className="commitment-title">{content.title}</div>
            <div className="commitment-description">{content.description}</div>
        </div>
    )
    let itemImage = (
        <div className="commitment-image-background">
            <div className={`commitment-image ${invertedLayout ? "image-gradient-right-left" : "image-gradient-left-right"}`} />
        </div>
    )

    return (
        <div className="commitment">
            {itemImage}
            {itemText}
        </div>
    )
}