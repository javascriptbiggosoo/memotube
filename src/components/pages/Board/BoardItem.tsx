import { TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IPost } from "../../../types";
import { useNavigate } from "react-router-dom";
import { formatPostedTime } from "../../../utils/formatPostedTime";

interface IBoardItemProps {
  post: IPost;
}

export default function BoardItem({ post }: IBoardItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/board/${post.id}`);
  };
  return (
    <TableRow key={post.id}>
      <ImageCell onClick={() => handleClick()}>
        <img src={post.thumbnail} alt={post.title} />
      </ImageCell>
      <TitleCell onClick={() => handleClick()}>{post.title}</TitleCell>
      <TableCell>{post.author}</TableCell>
      <TableCell>{formatPostedTime(post.createdAt)}</TableCell>
      <TableCell>{post.likes.likeCount}</TableCell>
    </TableRow>
  );
}

const ImageCell = styled(TableCell)`
  cursor: pointer;
  img {
    width: 100px;
    height: auto;
  }
`;
const TitleCell = styled(TableCell)`
  cursor: pointer;
`;
