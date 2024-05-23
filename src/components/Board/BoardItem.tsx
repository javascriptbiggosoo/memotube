import { TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IPost } from "../../types";
import { useNavigate } from "react-router-dom";

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
      <TableCell onClick={() => handleClick()}>{post.title}</TableCell>
      <TableCell>{post.author}</TableCell>
      <TableCell>{post.createdAt}</TableCell>
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
