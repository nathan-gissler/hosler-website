import AudioTrack from "./AudioTrack"
import PlayIcon from "./assets/icons/play-icon.svg"
import PreviousIcon from "./assets/icons/previous-icon.svg"
import NextIcon from "./assets/icons/next-icon.svg"

export default function AudioPlayer() {
    return (
        <div className="audio-player">
            <div className="track-list">
                <AudioTrack src="/assets/audios/Chase MG.wav" />
                <AudioTrack src="/assets/audios/The Goddess.wav" />
                <AudioTrack src="/assets/audios/This Journey Ahead.wav" />
            </div>
            <div className="audio-control">
                <div className="audio-control-button previous-button highlight-on-hover">
                    <img className="previous-next-button-logo" src={PreviousIcon} alt="" />
                </div>
                <div className="audio-control-button play-button highlight-on-hover">
                    <img className="play-button-logo" src={PlayIcon} alt="" />
                </div>
                <div className="audio-control-button next-button highlight-on-hover">
                    <img className="previous-next-button-logo" src={NextIcon} alt="" />
                </div>
            </div>
        </div>
    )
}