import React from "react";
import { useRecoilValue } from "recoil";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { videoPostsState } from "../../atoms/videoPostAtoms";
import BoardItem from "../../components/Board/BoardItem";

export const BoardPage = () => {
  const videoPosts = useRecoilValue(videoPostsState);

  const handleAddPost = () => {
    console.log("Add post button clicked");
  };

  return (
    <BoardContainer>
      <Header>
        <Title>게시판</Title>
        <Button variant="contained" color="primary" onClick={handleAddPost}>
          게시글 추가하기
        </Button>
      </Header>
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
              <BoardItem key={post.id} post={post} />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  min-width: 800px;
  /* margin: auto; */
  /* margin-top: 2rem; */
`;

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

const StyledTableContainer = styled(TableContainer)`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const CustomTableCell = styled(TableCell)<{ width: string }>`
  width: ${(props) => props.width};
`;
