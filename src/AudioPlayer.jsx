import { useEffect, useState } from "react"
import AudioTrack from "./AudioTrack"
import PlayIcon from "./assets/icons/play-icon.svg"
import PauseIcon from "./assets/icons/pause-icon.svg"
import PreviousIcon from "./assets/icons/previous-icon.svg"
import NextIcon from "./assets/icons/next-icon.svg"

export default function AudioPlayer({ trackList }) {
    const [currentTime, setCurrentTime] = useState(0)
    const [intervalID, setIntervalID] = useState()
    const [isTrackPlaying, setIsTrackPlaying] = useState(false)
    const [startPlayingNextTrack, setStartPlayingNextTrack] = useState(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [track, setTrack] = useState()

    let audioTracks = trackList.map((t, index) => (
        <div key={index} onClick={() => {handleClickOnTrack(index)}}>
            <AudioTrack audioTrack={t} isPlaying={isTrackPlaying && currentTrackIndex == index} />
        </div>
    ))

    // Refreshing current time every 250ms only when track playing
    useEffect(() => {
        if (isTrackPlaying) {
            setIntervalID(setInterval(function() {
                setCurrentTime(track.currentTime)
            }, 250))
        } else {
            clearInterval(intervalID)
        }
    }, [isTrackPlaying])

    // Updating current track when track index has changed
    useEffect(() => {
        changeTrack(currentTrackIndex)
    }, [currentTrackIndex])

    useEffect(() => {
        // Playing when current track is updated
        if (track && startPlayingNextTrack) {
            track.oncanplay = function() {
                track.play()
                setIsTrackPlaying(true)
            }
        }

        // Handle the end of a track
        if (track) {
            const onEnded = () => {
                setIsTrackPlaying(false)
                setCurrentTime(0)
            }
            track.addEventListener('ended', onEnded)

            return () => {
                track.removeEventListener('ended', onEnded)
            }
        }
    }, [track])

    // Update current track
    function changeTrack(newIndex) {
        if (track) {
            track.pause()
            setIsTrackPlaying(false)
        }
        clearInterval(intervalID)
        setTrack(new Audio(trackList[newIndex].src))
        setCurrentTime(0)
    }

    function handlePlayButton() {
        if (isTrackPlaying) {
            track.pause()
        } else {
            track.play()
        }
        setIsTrackPlaying(!isTrackPlaying)
    }

    function handlePrevButton() {
        setStartPlayingNextTrack(isTrackPlaying)
        setCurrentTrackIndex((currentTrackIndex + trackList.length - 1) % trackList.length)
    }

    function handleNextButton() {
        setStartPlayingNextTrack(isTrackPlaying)
        setCurrentTrackIndex((currentTrackIndex + 1) % trackList.length)
    }

    function handleClickOnTrack(index) {
        if (index == currentTrackIndex) {
            handlePlayButton()
        } else {
            setStartPlayingNextTrack(true)
            setCurrentTrackIndex(index)
        }
    }

    return (
        <div className="audio-player">
            <div className="track-list">
                {audioTracks}
            </div>
            <div className="audio-control">
                <div className="audio-progress-bar">
                    <div className="audio-progress" style={currentTime == 0 ? {width: "0%"} : {width: `${currentTime * 100 / track.duration}%`}}></div>
                </div>
                <div className="audio-control-buttons">
                    <div className="audio-control-button previous-button highlight-on-hover" onClick={handlePrevButton}>
                        <img className="previous-next-button-logo" src={PreviousIcon} alt="" />
                    </div>
                    <div className="audio-control-button play-button highlight-on-hover" onClick={handlePlayButton}>
                        <img className="play-button-logo" src={isTrackPlaying ? PauseIcon : PlayIcon} alt="" />
                    </div>
                    <div className="audio-control-button next-button highlight-on-hover" onClick={handleNextButton}>
                        <img className="previous-next-button-logo" src={NextIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}