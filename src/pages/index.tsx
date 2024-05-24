import React, { useState } from "react";
import { YouTubeEvent } from "react-youtube";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import { YouTubeVideo } from "../components/Home/YouTubeVideo";
import VideoUrlInput from "../components/Home/VideoUrlInput";
import MemoPad from "../components/Home/Memopad";
import formatTime from "../utils/formatMemoTime";
import MSnackbar from "../components/UI/MSnackbar";
import { IMemo } from "../types";
import { useVideoStartInit } from "../hooks/useVideoStartInit";

const dummyMemos = [
  {
    memoTime: "44:23",
    memoText: "아무 장수 챌린지",
    id: "0",
    createdAt: new Date().getTime(),
  },
  {
    memoTime: "1:27:22",
    memoText: "메오대전",
    id: "1",
    createdAt: new Date().getTime(),
  },
];

const dummyUrl = "hnanNlDbsE4";
export default function HomePage() {
  const [isSnbOpen, setIsSnbOpen] = useState(true);
  const [videoUrl, setVideoUrl] = useState(dummyUrl);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [memos, setMemos] = useState<IMemo[]>(dummyMemos);
  useVideoStartInit();

  function showVideo(memo: string) {
    setVideoUrl(memo);
    setMemos([]);
  }

  function getCurrentTime(event: YouTubeEvent) {
    const time = event.target.getCurrentTime();
    setCurrentTime(formatTime(time));
    // console.log(time);
  }

  return (
    <HomePageContainer>
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YouTubeVideo videoId={videoUrl} onStateChange={getCurrentTime} />
      <SaveButton variant="contained" color="primary">
        리스트에 저장하기
      </SaveButton>
      <MemoPad currentTime={currentTime} memos={memos} setMemos={setMemos} />

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
