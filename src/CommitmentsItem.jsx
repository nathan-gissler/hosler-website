export default function CommitmentsItem({ invertedLayout, content }) {
    let itemText = (
        <div className="commitment-text">
            <div className="commitment-title">{content.title}</div>
            <div className="commitment-description">{content.description}</div>
        </div>
    )
    let itemImage = (
        <div className="commitment-image" />
    )

    if (invertedLayout) {
        return (
            <div className="commitment">
                {itemImage}
                {itemText}
            </div>
        )
    } else {
        return (
            <div className="commitment">
                {itemText}
                {itemImage}
            </div>
        )
    }
}