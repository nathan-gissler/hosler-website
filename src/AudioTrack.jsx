import { useEffect, useState } from "react"
import { secondsToMinutesSeconds } from "./utils.js"
import PlayIcon from "./assets/icons/play-icon.svg"
import PauseIcon from "./assets/icons/pause-icon.svg"

export default function AudioTrack({ audioTrack, isSelected, isPlaying, currentTime }) {
    const track = new Audio(audioTrack.src)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        track.onloadedmetadata = function() {
            setDuration(track.duration)
        }
    }, [])

    return (
        <div className="audio-track-container">
            <div className="audio-track-progress" style={!isSelected || currentTime == 0 ? {width: "0%"} : {width: `${currentTime * 100 / duration}%`}}></div>
            <div className={isSelected ? "audio-track is-selected" : "audio-track"}>
                <img className="track-play-button" src={isPlaying ? PauseIcon : PlayIcon} alt="" />
                <div className="track-name">{ audioTrack.title }</div>
                <div className="player-time-duration">{ secondsToMinutesSeconds(duration) }</div>
            </div>
        </div>
    )
}