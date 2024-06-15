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
  TextField,
} from "@mui/material";
import styled from "styled-components";
import { IMylistItem } from "../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddPost } from "../../../hooks/usePost";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../../../atoms/userAtoms";

interface AddPostModalProps {
  open: boolean;
  onClose: () => void;
}

interface IFormInput {
  title: string;
}

export default function AddPostModal({ open, onClose }: AddPostModalProps) {
  const { mylistData } = useMylist();
  const [selectedItem, setSelectedItem] = useState<IMylistItem | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { addPost } = useAddPost();
  const currentUser = useRecoilValue(currentUserState);
  const handleSelectItem = (item: IMylistItem) => {
    setSelectedItem(item);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (selectedItem && currentUser?.email) {
      addPost({
        title: data.title,
        mylistItem: selectedItem,
        author: currentUser.email,
      });
      console.log("Selected item to upload as post:", selectedItem);
      console.log("Post title:", data.title);

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
                selected={selectedItem?.id === mylistItem.id}
                onClick={() => handleSelectItem(mylistItem)}
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

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="올릴 게시글 제목"
            variant="outlined"
            fullWidth
            {...register("title", { required: "제목을 입력해주세요." })}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ""}
          />
          <ButtonContainer>
            <Button variant="contained" color="primary" type="submit">
              게시물 올리기
            </Button>
          </ButtonContainer>
        </FormContainer>
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
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const FormContainer = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
