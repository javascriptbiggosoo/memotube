import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playerVarsState, playerState } from "../atoms/video";

interface Props {
  videoId: string;
  onPause?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onPause }: Props) => {
  const playerVars = useRecoilValue(playerVarsState);
  const setPlayer = useSetRecoilState(playerState);

  function handleReady(event: YouTubeEvent) {
    setPlayer(event.target);
  }

  const opts = {
    height: "540",
    width: "960",
    playerVars,
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onPause={onPause}
      onReady={handleReady}
    />
  );
};
