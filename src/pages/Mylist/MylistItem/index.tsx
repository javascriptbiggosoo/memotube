import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useVideoStartInit } from "../../../hooks/useVideoStartInit";
import { Box, Button } from "@mui/material";
import MemoItems from "../../../components/pages/Home/Memopad/MemoItems";
import { YoutubeVideo } from "../../../components/YoutubeVideo/YoutubeVideo";
import { useMylistItem } from "../../../hooks/useMylistItem";

export default function MylistItemPage() {
  const { listId } = useParams<"listId">();
  const { mylistItemData } = useMylistItem(listId!);
  useVideoStartInit();
  const { deleteMylistItem } = useMylistItem(listId!);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    deleteMylistItem(listId!);
    navigate("/mylist");
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
