import PlayIcon from "./assets/icons/play-icon.svg"

export default function AudioTrack({ src }) {
    const trackTitle = src.split(/[\/\.]/).slice(-2, -1)[0];

    return (
        <div className="audio-track highlight-on-hover">
            <img className="track-play-button" src={PlayIcon} alt="" />
            <div className="track-name">{ trackTitle }</div>
            <div className="track-duration">00:30</div>
        </div>
    )
}