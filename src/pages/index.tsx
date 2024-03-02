import React, { useState } from "react";
import { YouTubeVideo } from "../components/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("OoazW3HAq1c");

  function showVideo(memo: string) {
    setVideoUrl(memo);
    // 메모패드 초기화
  }
  return (
    <main>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} />
      <MemoPad />
      {/* TODO: 베스트 영상들 모음 추가 */}
    </main>
  );
}
