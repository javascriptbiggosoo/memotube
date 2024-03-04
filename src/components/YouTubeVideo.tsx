import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

interface Props {
  videoId: string;
  onPause?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onPause }: Props) => {
  const opts = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: 0, // 자동 재생 비활성화
    },
  };

  return <YouTube videoId={videoId} opts={opts} onPause={onPause} />;
};
