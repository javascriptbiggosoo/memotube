import React, { useEffect } from "react";
// import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import styled from "styled-components";
// import { myVideoMemoListState } from "../../atoms/myVideoMemoList";
import { useQuery } from "@tanstack/react-query";
import { IMyMemo } from "../../types";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/userAtoms";
import { getMylist } from "../../api/mylist.api";

export default function MylistPage() {
  const currentUser = useRecoilValue(currentUserState);
  const navigate = useNavigate();
  const { data } = useQuery<IMyMemo[]>({
    queryKey: ["mylist"],
    queryFn: () => getMylist(),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
  console.log(data);
  // const myMemoList = useRecoilValue(myVideoMemoListState);

  useEffect(() => {
    if (!currentUser) {
      console.log("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleItemClick = (id: string) => {
    navigate(`/mylist/${id}`);
  };

  return (
    <MylistContainer>
      <Header>
        <Title>마이리스트</Title>
      </Header>
      <StyledList>
        {/* TODO 로딩 */}
        {data &&
          data.map((memo) => (
            <div key={memo.id}>
              <StyledListItem onClick={() => handleItemClick(memo.id)}>
                <ListItemAvatar>
                  <StyledAvatar src={memo.thumbnail} alt={memo.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={memo.title}
                  secondary={`작성일: ${new Date(
                    memo.createdAt
                  ).toLocaleString()}`}
                />
              </StyledListItem>
              <Divider />
            </div>
          ))}
      </StyledList>
    </MylistContainer>
  );
}

const MylistContainer = styled(Container)`
  padding: 2rem 0;
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

const StyledList = styled(List)`
  width: 100%;
  background-color: #fff;
`;

const StyledListItem = styled(ListItem)`
  padding: 1rem;
  cursor: pointer; /* 커서 변경 */
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 16px;
`;