import React from "react";
import { useRecoilValue } from "recoil";
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
import { myVideoMemoListState } from "../../atoms/myVideoMemoList";

export default function MylistPage() {
  const myMemoList = useRecoilValue(myVideoMemoListState);
  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    navigate(`/mylist/${id}`);
  };

  return (
    <MylistContainer>
      <Header>
        <Title>마이리스트</Title>
      </Header>
      <StyledList>
        {myMemoList.map((memo) => (
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
