import React, { useState } from "react";
import { YouTubeVideo } from "../components/Home/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";
import formatTime from "../utils/formatMemoTime";
import { YouTubeEvent } from "react-youtube";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import MSnackbar from "../components/UI/MSnackbar";

export default function HomePage() {
  const [isSnbOpen, setIsSnbOpen] = useState(true);

  const [videoUrl, setVideoUrl] = useState("hnanNlDbsE4");
  const [currentTime, setCurrentTime] = useState("00:00");

  function showVideo(memo: string) {
    setVideoUrl(memo);
  }

  function getCurrentTime(event: YouTubeEvent) {
    const time = event.target.getCurrentTime();
    setCurrentTime(formatTime(time));
    // console.log(time);
  }

  return (
    <HomePageContainer>
      {/* TODO: 펼치기 접기 */}
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} onStateChange={getCurrentTime} />
      <SaveButton>리스트에 저장하기</SaveButton>
      <MemoPad currentTime={currentTime} />
      {/* TODO: 베스트 영상들 모음 추가 */}

      <MSnackbar
        message="사용 이해를 돕기 위해 더미 데이터를 포함시킨 페이지입니다."
        open={isSnbOpen}
        onSnackbarClose={() => {
          setIsSnbOpen(false);
        }}
      />
    </HomePageContainer>
  );
}

const HomePageContainer = styled(Container)`
  position: relative;
`;
const SaveButton = styled(Button)``;
