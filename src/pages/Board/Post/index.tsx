import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoPostsState } from "../../../atoms/videoPostAtoms";
import { useRecoilValue } from "recoil";
import { IPost } from "../../../types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { YouTubeVideo } from "../../../components/Home/YouTubeVideo";
import MemoItems from "../../../components/Home/Memopad/MemoItems";
import styled from "styled-components";
import { Box } from "@mui/material";

export default function PostPage() {
  const { postId } = useParams<"postId">();
  const postsState = useRecoilValue(videoPostsState);
  const [post, setPost] = useState<IPost>();
  useEffect(() => {
    const post = postsState.find((post) => post.id === postId);

    setPost(post);
  }, [postsState, postId]);

  return (
    <div>
      {post && (
        <>
          <div>{post?.title}</div>
          <YouTubeVideo videoId={post.content.videoId} />

          {/* 메모 */}
          <MemoContainer component="section">
            <MemoItems memos={post.content.memos} />
          </MemoContainer>
          <ThumbUpIcon />
        </>
      )}
    </div>
  );
}
const MemoContainer = styled(Box)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
