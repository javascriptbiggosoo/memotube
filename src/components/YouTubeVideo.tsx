import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { useRecoilValue } from "recoil";
import { playerVarsState } from "../atoms/video";

interface Props {
  videoId: string;
  onStateChange?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onStateChange }: Props) => {
  const playerVars = useRecoilValue(playerVarsState);
  // const setPlayer = useSetRecoilState(playerState);

  const opts = {
    height: "540",
    width: "960",
    playerVars,
  };

  return (
    <YouTube videoId={videoId} opts={opts} onStateChange={onStateChange} />
  );
};
