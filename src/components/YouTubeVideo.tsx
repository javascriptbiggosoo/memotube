import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import { useRecoilState } from "recoil";
import { startTimeState } from "../atoms/video";

interface Props {
  videoId: string;
  onPause?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onPause }: Props) => {
  const [startTime, setStartTime] = useRecoilState(startTimeState);
  const opts = {
    height: "540",
    width: "960",
    playerVars: {
      autoplay: 1, // 자동 재생
      start: startTime, // 시작 시간
    },
  };

  return <YouTube videoId={videoId} opts={opts} onPause={onPause} />;
};
