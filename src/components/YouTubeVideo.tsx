import React, { useEffect, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { useRecoilState, useRecoilValue } from "recoil";
import { pauseVideoState, playerVarsState } from "../atoms/video";

interface Props {
  videoId: string;
  onStateChange?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onStateChange }: Props) => {
  const [player, setPlayer] = useState<typeof YouTubePlayer>();
  const [pauseVideo, setPauseVideo] = useRecoilState(pauseVideoState);
  const playerVars = useRecoilValue(playerVarsState);

  useEffect(() => {
    if (player && pauseVideo) {
      player.pauseVideo();
      setPauseVideo(false);
    }
  }, [pauseVideo]);
  const handlePlayerReady = (event: YouTubeEvent) => {
    setPlayer(event.target);
  };

  const opts = {
    height: "540",
    width: "960",
    playerVars,
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onStateChange={onStateChange}
      onReady={handlePlayerReady}
    />
  );
};
