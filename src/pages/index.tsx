import React, { useState } from "react";
import { YouTubeVideo } from "../components/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";
import formatTime from "../utils/formatTime";
import { YouTubeEvent } from "react-youtube";
import { Container } from "@mui/material";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("hnanNlDbsE4");
  const [currentTime, setCurrentTime] = useState("00:00");

  function showVideo(memo: string) {
    setVideoUrl(memo);
  }

  function getCurrentTime(event: YouTubeEvent) {
    const time = event.target.getCurrentTime();
    setCurrentTime(formatTime(time));
    console.log(time);
  }

  return (
    <Container>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} onStateChange={getCurrentTime} />
      <MemoPad currentTime={currentTime} />
      {/* TODO: 베스트 영상들 모음 추가 */}
    </Container>
  );
}
