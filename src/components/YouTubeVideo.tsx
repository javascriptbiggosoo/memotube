import React from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
}

export const YouTubeVideo = ({ videoId }: Props) => {
  const opts = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: 0, // 자동 재생 비활성화
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};
