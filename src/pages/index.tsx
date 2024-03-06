import React, { useState } from "react";
import { YouTubeVideo } from "../components/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";
import formatTime from "../utils/formatTime";
import { YouTubeEvent } from "react-youtube";
import { Container } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { playerState } from "../atoms/video";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("hnanNlDbsE4");
  const [currentTime, setCurrentTime] = useState("00:00");
  const setPlayer = useSetRecoilState(playerState);

  function showVideo(memo: string) {
    setVideoUrl(memo);
    // TODO: 메모패드 초기화
  }
  function getCurrentTime(event: YouTubeEvent) {
    const time = event.target.getCurrentTime();
    setPlayer(event.target);
    setCurrentTime(formatTime(time));
  }

  return (
    <Container>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} onPause={getCurrentTime} />
      <MemoPad currentTime={currentTime} />
      {/* TODO: 베스트 영상들 모음 추가 */}
    </Container>
  );
}
