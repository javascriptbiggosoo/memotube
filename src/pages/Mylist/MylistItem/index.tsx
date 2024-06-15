import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useVideoStartInit } from "../../../hooks/useVideoStartInit";
import { Box, Button } from "@mui/material";
import MemoItems from "../../../components/pages/home/Memopad/MemoItems";
import { YoutubeVideo } from "../../../components/YoutubeVideo/YoutubeVideo";
import {
  useDeleteMylistItem,
  useMylistItem,
} from "../../../hooks/useMylistItem";

export default function MylistItemPage() {
  const { listId } = useParams<"listId">();
  const { mylistItemData } = useMylistItem(listId!);
  useVideoStartInit();
  const { deleteMylistItem } = useDeleteMylistItem();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    deleteMylistItem(listId!);
    navigate("/mylist");
  };

  const handlePost = () => {
    // 게시판에 등록하는 로직 추가
    console.log("게시판에 등록:", listId);
  };

  return (
    <div>
      {mylistItemData && (
        <>
          <Header>
            <Title>{mylistItemData.title}</Title>
            <Actions>
              <DeleteButton
                variant="contained"
                color="warning"
                onClick={handleDelete}
              >
                리스트에서 삭제
              </DeleteButton>
              <PostButton
                variant="contained"
                color="primary"
                onClick={handlePost}
              >
                게시판에 등록
              </PostButton>
            </Actions>
          </Header>
          <YoutubeVideo videoId={mylistItemData.content.videoId} />
          <MemoContainer component="section">
            <MemoItems memos={mylistItemData.content.memos} />
          </MemoContainer>
        </>
      )}
    </div>
  );
}

const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
  &:hover {
    background-color: #d32f2f;
  }
`;

const PostButton = styled(Button)`
  background-color: #2196f3;
  color: #fff;
  &:hover {
    background-color: #1976d2;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 버튼 사이에 간격 추가 */
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`;
const MemoContainer = styled(Box)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
