import { useEffect, useState } from "react"
import PlayIcon from "./assets/icons/play-icon.svg"
import PauseIcon from "./assets/icons/pause-icon.svg"

export default function AudioTrack({ audioTrack, isPlaying }) {
    const [track, setTrack] = useState(new Audio(audioTrack.src))
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        track.onloadedmetadata = function() {
            setDuration(track.duration)
        }
    }, [])

    function secondsToMinutesSeconds(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
      
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="audio-track highlight-on-hover" style={isPlaying ? {backgroundColor: "#1F1F1F"} : {}}>
            <img className="track-play-button" src={isPlaying ? PauseIcon : PlayIcon} alt="" />
            <div className="track-name">{ audioTrack.title }</div>
            <div className="track-duration">{ secondsToMinutesSeconds(duration) }</div>
        </div>
    )
}