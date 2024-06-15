import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { YoutubeVideo } from "../../../components/YoutubeVideo/YoutubeVideo";
import MemoItems from "../../../components/pages/home/Memopad/MemoItems";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { useVideoStartInit } from "../../../hooks/useVideoStartInit";
import { usePost } from "../../../hooks/usePost";
import LikeButton from "../../../components/pages/board/post/LikeButton";
import { currentUserState } from "../../../atoms/userAtoms";
import { useRecoilValue } from "recoil";

export default function PostPage() {
  const { postId } = useParams<"postId">();
  const { postData, deletePost, toggleLike } = usePost(postId!);
  const currentUser = useRecoilValue(currentUserState);
  const [liked, setLiked] = useState(
    postData?.likes.likedUser.includes(currentUser?.email || "없다능") || false
  );
  const [likeCount, setLikeCount] = useState(postData?.likes.likeCount || 0);
  useVideoStartInit();
  const navigate = useNavigate();

  const handleDeletePost = () => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    // 게시글 삭제 로직 추가
    deletePost(postId!);
    navigate("/board");
  };

  const handleLike = () => {
    toggleLike(liked);
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      {postData && (
        <>
          <Header>
            <Title>{postData.title}</Title>
            <Actions>
              <LikeButton
                likeCount={likeCount}
                onClick={handleLike}
                liked={liked}
              />
              {currentUser && currentUser.email === postData.author && (
                <DeleteButton
                  variant="contained"
                  color="warning"
                  onClick={handleDeletePost}
                >
                  게시글 삭제
                </DeleteButton>
              )}
            </Actions>
          </Header>
          <YoutubeVideo videoId={postData.content.videoId} />

          <MemoContainer component="section">
            <MemoItems memos={postData.content.memos} />
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
  gap: 6px;
  display: flex;
  align-items: center;
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
