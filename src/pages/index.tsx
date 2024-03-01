import React, { useState } from "react";
import { YouTubeVideo } from "../components/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";

export default function HomePage() {
  const [videoUrl, setVideoUrl] = useState("OoazW3HAq1c");

  function showVideo(memo: string) {
    setVideoUrl(memo);
  }
  return (
    <main>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput />
      <YouTubeVideo videoId={videoUrl} />
      <MemoPad memos={[{ time: "0:00", memo: "앙" }]} />
      {/* TODO: 베스트 영상들 모음 추가 */}
    </main>
  );
}
