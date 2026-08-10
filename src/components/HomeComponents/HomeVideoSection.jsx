"use client";
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "../../css/HomeComponentsCss/HomeVideoSection.css";

export default function HomeVideoSection() {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setCursorPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div
            ref={wrapperRef}
            className="home-video-wrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            onClick={toggleMute}
        >
            {shouldLoad && (
                <video
                    ref={videoRef}
                    src="/videos/homevideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="home-video"
                />
            )}
            <div
                className={`video-custom-cursor ${showCursor ? "visible" : ""}`}
                style={{ left: cursorPos.x, top: cursorPos.y }}
            >
                {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
            </div>
        </div>
    );
}
