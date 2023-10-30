// components/VideoPlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';
//import ReactPlayer from 'react-player/youtube'

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
