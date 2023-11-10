// components/VideoPlayer.tsx
import React from 'react';
import Iframe from 'react-iframe'

interface VideoPlayerProps {
  videoUrl: string;
}

const Iframedemo: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <Iframe 
        width="100%"
        height="400px"
        url={videoUrl}
       
        allowFullScreen
        title="Video Player"
      ></Iframe>
    </div>
  );
};

export default Iframedemo;
