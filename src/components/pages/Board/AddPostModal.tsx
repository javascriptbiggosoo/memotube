import React, { useState } from "react";
import MModal from "../../common/MModal";
import { useMylist } from "../../../hooks/useMylist";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import { IMylistItem } from "../../../types";

interface AddPostModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddPostModal({ open, onClose }: AddPostModalProps) {
  const { mylistData } = useMylist();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (id: string) => {
    setSelectedItem(id);
  };

  const handleUploadPost = () => {
    if (selectedItem) {
      // post 업로드 로직을 여기에 추가합니다.
      console.log("Selected item to upload as post:", selectedItem);
      // 예시: uploadPost(selectedItem);
      onClose();
    } else {
      alert("Please select an item to upload.");
    }
  };

  return (
    <MModal open={open} onClose={onClose}>
      <ModalContent>
        <h2>게시판에 올릴 메모를 선택해주세요.</h2>
        <List>
          {mylistData &&
            mylistData.map((mylistItem: IMylistItem) => (
              <StyledListItem
                key={mylistItem.id}
                selected={selectedItem === mylistItem.id}
                onClick={() => handleSelectItem(mylistItem.id)}
              >
                <ListItemAvatar>
                  <StyledAvatar
                    src={mylistItem.thumbnail}
                    alt={mylistItem.title}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={mylistItem.title}
                  secondary={`Created at: ${new Date(
                    mylistItem.createdAt
                  ).toLocaleString()}`}
                />
              </StyledListItem>
            ))}
        </List>

        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadPost}
          >
            게시물 올리기
          </Button>
        </ButtonContainer>
      </ModalContent>
    </MModal>
  );
}

const ModalContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 16px;
`;

const StyledListItem = styled(ListItem)<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#f0f0f0" : "inherit")};
  &:hover {
    background-color: #f0f0f0;
  }
`;
