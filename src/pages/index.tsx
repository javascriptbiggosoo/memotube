import React, { useState } from "react";
import { YouTubeVideo } from "../components/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";
import formatTime from "../utils/formatTime";
import { YouTubeEvent } from "react-youtube";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("hnanNlDbsE4");
  const [currentTime, setCurrentTime] = useState("00:00");

  function showVideo(memo: string) {
    setVideoUrl(memo);
    // 메모패드 초기화
  }
  function getCurrentTime(event: YouTubeEvent) {
    // 비디오 시간 받아오기
    const time = event.target.getCurrentTime();
    setCurrentTime(formatTime(time));
    console.log(currentTime);
  }
  return (
    <main>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} onPause={getCurrentTime} />
      <MemoPad currentTime={currentTime} />
      {/* TODO: 베스트 영상들 모음 추가 */}
    </main>
  );
}
