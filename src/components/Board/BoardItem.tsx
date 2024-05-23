import { TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IPost } from "../../types";

interface IBoardItemProps {
  post: IPost;
}

export default function BoardItem({ post }: IBoardItemProps) {
  return (
    <TableRow key={post.id}>
      <ImageCell onClick={() => {}}>
        <img src={post.thumbnail} alt={post.title} />
      </ImageCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>{post.author}</TableCell>
      <TableCell>{post.createdAt}</TableCell>
      <TableCell>{post.likeCount}</TableCell>
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
