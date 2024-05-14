import React from "react";
import { useRecoilValue } from "recoil";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import { videoPostsState } from "../../atoms/videoPostAtoms";

export const BoardPage = () => {
  const videoPosts = useRecoilValue(videoPostsState);

  return (
    <StyledTableContainer>
      <Table aria-label="video posts table">
        <TableHead>
          <TableRow>
            <CustomTableCell width="25%">이미지</CustomTableCell>
            <CustomTableCell width="30%">제목</CustomTableCell>
            <CustomTableCell width="15%">작성자</CustomTableCell>
            <CustomTableCell width="12.5%">등록일</CustomTableCell>
            <CustomTableCell width="7.5%">추천</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {videoPosts.map((post) => (
            // TODO: 컴포넌트로 빼자
            <TableRow key={post.id}>
              <ImageCell onClick={() => window.open(post.videoId, "_blank")}>
                <img src={post.thumbnail} alt={post.title} />
              </ImageCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.userId}</TableCell>
              <TableCell>{post.createdAt}</TableCell>
              <TableCell>{post.likes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)`
  max-width: 800px;
  margin: auto;
  margin-top: 2rem;
`;

const ImageCell = styled(TableCell)`
  cursor: pointer;
  img {
    width: 100px;
    height: auto;
  }
`;

const CustomTableCell = styled(TableCell)<{ width: string }>`
  width: ${(props) => props.width};
`;
