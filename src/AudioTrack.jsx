import { useEffect, useState } from "react"
import { secondsToMinutesSeconds } from "./utils.js"
import PlayIcon from "./assets/icons/play-icon.svg"
import PauseIcon from "./assets/icons/pause-icon.svg"

export default function AudioTrack({ audioTrack, isSelected, isPlaying }) {
    const track = new Audio(audioTrack.src)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        track.onloadedmetadata = function() {
            setDuration(track.duration)
        }
    }, [])

    return (
        <div className={isSelected ? "audio-track highlight-on-hover is-selected" : "audio-track highlight-on-hover"}>
            <img className="track-play-button" src={isPlaying ? PauseIcon : PlayIcon} alt="" />
            <div className="track-name">{ audioTrack.title }</div>
            <div className="track-duration">{ secondsToMinutesSeconds(duration) }</div>
        </div>
    )
}