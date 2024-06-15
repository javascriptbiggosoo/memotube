import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../../atoms/userAtoms";
import { FaTrash } from "react-icons/fa";
import { useMylist } from "../../hooks/useMylist";
import { useDeleteMylistItem } from "../../hooks/useMylistItem";
import MLoading from "../../components/common/MLoading";

export default function MylistPage() {
  const currentUser = useRecoilValue(currentUserState);
  const navigate = useNavigate();
  const { mylistData, isMylistLoading } = useMylist();
  const { deleteMylistItem } = useDeleteMylistItem();

  useEffect(() => {
    if (!currentUser) {
      console.log("로그인이 필요한 서비스입니다.");
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleItemClick = (id: string) => {
    navigate(`/mylist/${id}`);
  };

  const handleDelete = (id: string) => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    deleteMylistItem(id);
  };

  return (
    <MylistContainer>
      <Header>
        <Title>마이리스트</Title>
      </Header>
      {isMylistLoading && <MLoading />}
      {mylistData && mylistData.length > 0 ? (
        <StyledList>
          {mylistData.map((memo) => (
            <div key={memo.id}>
              <StyledListItem>
                <ListItemAvatar onClick={() => handleItemClick(memo.id)}>
                  <StyledAvatar src={memo.thumbnail} alt={memo.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={memo.title}
                  secondary={`작성일: ${new Date(
                    memo.createdAt
                  ).toLocaleString()}`}
                  onClick={() => handleItemClick(memo.id)}
                />
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDelete(memo.id)}
                >
                  <FaTrash />
                </IconButton>
              </StyledListItem>
              <Divider />
            </div>
          ))}
        </StyledList>
      ) : (
        <EmptyMessage>마이리스트가 비어 있습니다.</EmptyMessage>
      )}
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

const EmptyMessage = styled(Typography)`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #888;
`;
