import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Pagination,
  Box,
} from "@mui/material";
import styled from "styled-components";
import BoardItem from "../../components/pages/board/BoardItem";
import { usePosts } from "../../hooks/usePosts";
import AddPostModal from "../../components/pages/board/AddPostModal";
import MLoading from "../../components/common/MLoading";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/userAtoms";
import { useSearchParams } from "react-router-dom";
import { POSTS_PER_PAGE } from "../../constants/pagination";

export const BoardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +(searchParams.get("page") || "1");
  const limit = POSTS_PER_PAGE;
  const { postsData, totalPosts } = usePosts({ page, limit });
  const currentUser = useRecoilValue(currentUserState);

  const handleAddPost = async () => {
    setIsModalOpen(true);
  };

  const handlePageChange = (ev: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  return (
    <BoardContainer>
      <div className="header">
        <Title>게시판</Title>
        {currentUser && (
          <Button variant="contained" color="primary" onClick={handleAddPost}>
            게시글 추가하기
          </Button>
        )}
        {isModalOpen && (
          <AddPostModal
            onClose={() => setIsModalOpen(false)}
            open={isModalOpen}
          />
        )}
      </div>
      {postsData && totalPosts ? (
        <>
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
                {postsData.map((post) => (
                  <BoardItem key={post.id} post={post} />
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={Math.ceil(totalPosts / limit)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      ) : (
        <MLoading />
      )}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  min-width: 800px;
  /* margin: auto; */
  /* margin-top: 2rem; */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 10px;
  }
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
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const CustomTableCell = styled(TableCell)<{ width: string }>`
  width: ${(props) => props.width};
`;
