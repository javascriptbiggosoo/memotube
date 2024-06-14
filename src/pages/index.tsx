import React, { useState } from "react";
import { YouTubeEvent } from "react-youtube";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import { YoutubeVideo } from "../components/YoutubeVideo/YoutubeVideo";
import VideoUrlInput from "../components/pages/Home/VideoUrlInput";
import MemoPad from "../components/pages/Home/Memopad";
import formatTime from "../utils/formatMemoTime";
// import MSnackbar from "../components/UI/MSnackbar";
import { IMemo } from "../types";
import { useVideoStartInit } from "../hooks/useVideoStartInit";
import AddMyListItemModal from "../components/pages/Home/AddMyListItemModal";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../atoms/userAtoms";

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

const dummyVideoId = "hnanNlDbsE4";
export default function HomePage() {
  // const [isSnbOpen, setIsSnbOpen] = useState(true);
  const [isAddListOpen, setIsAddListOpen] = useState(false);
  const [videoId, setVideoUrl] = useState(dummyVideoId);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [memos, setMemos] = useState<IMemo[]>(dummyMemos);

  useVideoStartInit();
  const currentUser = useRecoilValue(currentUserState);

  function showVideo(memo: string) {
    setVideoUrl(memo);
    setMemos([]);
  }

  function getCurrentTime(event: YouTubeEvent) {
    const time = event.target.getCurrentTime();
    setCurrentTime(formatTime(time));
    // console.log(time);
  }
  function handleSaveClick() {
    if (!currentUser) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    setIsAddListOpen(true);
  }
  return (
    <HomePageContainer>
      <VideoUrlInput onUrlSubmit={showVideo} />
      <YoutubeVideo videoId={videoId} onStateChange={getCurrentTime} />
      {memos.length > 0 && (
        <SaveButton
          variant="contained"
          color="primary"
          onClick={handleSaveClick}
        >
          마이리스트에 저장
        </SaveButton>
      )}

      <AddMyListItemModal
        memos={memos}
        videoId={videoId}
        open={isAddListOpen}
        onClose={() => setIsAddListOpen(false)}
      />

      <MemoPad currentTime={currentTime} memos={memos} setMemos={setMemos} />

      {/* <MSnackbar
        message="사용 이해를 돕기 위해 더미 데이터를 포함시킨 페이지입니다."
        open={isSnbOpen}
        onSnackbarClose={() => {
          setIsSnbOpen(false);
        }}
      /> */}
    </HomePageContainer>
  );
}

const HomePageContainer = styled(Container)`
  position: relative;
`;
const SaveButton = styled(Button)``;
