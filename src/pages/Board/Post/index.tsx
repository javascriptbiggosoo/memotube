import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoPostsState } from "../../../atoms/videoPostAtoms";
import { useRecoilValue } from "recoil";
import { IPost } from "../../../types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { YoutubeVideo } from "../../../components/YoutubeVideo/YoutubeVideo";
import MemoItems from "../../../components/pages/Home/Memopad/MemoItems";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { useVideoStartInit } from "../../../hooks/useVideoStartInit";

export default function PostPage() {
  const { postId } = useParams<"postId">();
  const videoPosts = useRecoilValue(videoPostsState);
  const [post, setPost] = useState<IPost>();
  useVideoStartInit();

  useEffect(() => {
    const post = videoPosts.find((post) => post.id === postId);

    setPost(post);
  }, [videoPosts, postId]);

  return (
    <div>
      {post && (
        <>
          <Header>
            <Title>{post.title}</Title>
            <Actions>
              <ThumbUpIconStyled />
              <DeleteButton variant="contained" color="warning">
                게시글 삭제
              </DeleteButton>
            </Actions>
          </Header>
          <YoutubeVideo videoId={post.content.videoId} />

          <MemoContainer component="section">
            <MemoItems memos={post.content.memos} />
          </MemoContainer>
        </>
      )}
    </div>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbUpIconStyled = styled(ThumbUpIcon)`
  margin-right: 10px;
  cursor: pointer;
  color: #1976d2;
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: #fff;
  &:hover {
    background-color: #d32f2f;
  }
`;

const MemoContainer = styled(Box)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
