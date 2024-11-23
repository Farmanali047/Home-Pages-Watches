import React, { useRef, useState } from "react";
import PersonalizeButton from "./PersonalizeButton";
const Main = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true); // Default to muted

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleVolume = () => {
        if (isMuted) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1; // Set to 100% volume
            setIsMuted(false); // Change state to unmuted
        } else {
            videoRef.current.muted = true;
            setIsMuted(true); // Change state to muted
        }
    };

    return (
        <div className="Main">
            <div className="video-container">
                <video
                    ref={videoRef}
                    src="/Videos/hero.mp4"
                    autoPlay
                    loop
                    muted={isMuted} // Set muted to the state value
                />

                {/* Centered text */}
                <div className="centered-text">
                    <h1 style={{fontFamily:'sans-serif',fontSize:'lighter'}}>LUGGAGE</h1>
                    <h1 style={{fontFamily:'sans-serif',fontWeight:'lighter'}}>OF</h1>
                    <h1 style={{fontFamily:'sans-serif',fontWeight:'lighter'}}>FAME</h1>
                    <p>EFFECTIVE AFFINITIES</p>
                    <p>SINCE 1853</p>
                    <PersonalizeButton
                            dataElement="DISCOVER"
                            url="https://www.goyard.com/eu_en/online-personalisation.html"
                            colore="white"
                    />

                </div>
            </div>

            <div className="video-controls">
                {/* Play/Pause button with icon */}
                <button onClick={togglePlayPause} className="control-btn play-pause-btn">
                    <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
                </button>

                {/* Volume button (Mute/Unmute toggle) */}
                <button onClick={toggleVolume} className="control-btn volume-btn">
                    <i className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`}></i>
                </button>
            </div>

            <div className="gif-container">
                <img src="Images/Hulot_Gazette_EN.gif" alt="GIF" className="gif" />
            </div>
        </div>
    );
};

export default Main;
