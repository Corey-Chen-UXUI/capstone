import "./videoPlayer.scss";
import { useEffect, useRef } from "react";

function VideoPlayer({ width, height }) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: "recipe-examples",
        });
    }, []);

    return (
        <div>
            <video
                ref={videoRef}
                data-cld-public-id="https://www.youtube.com/embed/E1cklb4aeXA"
                width={width}
                height={height}
            />
        </div>
    );
}

export default VideoPlayer;
