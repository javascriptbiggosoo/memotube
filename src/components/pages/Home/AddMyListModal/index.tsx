import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";
import styled from "styled-components";
import MModal from "../../../UI/MModal";
import { useSetRecoilState } from "recoil";
import { myVideoMemoListState } from "../../../../atoms/myVideoMemoList";
import { IMemo } from "../../../../types";

interface MModalProps {
  memos: IMemo[];
  videoId: string;
  open: boolean;
  onClose: () => void;
}

interface IFormInput {
  title: string;
}

export default function AddMyListModal({
  open,
  onClose,
  memos,
  videoId,
}: MModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const setMyVideoMemoListState = useSetRecoilState(myVideoMemoListState);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setMyVideoMemoListState((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        thumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        content: {
          id: crypto.randomUUID(),
          videoId,
          memos,
        },
        createdAt: new Date().getTime(),
        title: data.title,
      },
    ]);
    onClose();
  };

  return (
    <MModal open={open} handleClose={onClose}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>저장하실 제목을 입력해주세요</Title>
        <TextField
          label="제목"
          variant="outlined"
          fullWidth
          {...register("title", {
            required: true,
            maxLength: 30,
            minLength: 1,
          })}
          error={!!errors.title}
          helperText={errors.title ? "30자 이하로 제목을 입력해주세요." : ""}
        />
        <ButtonContainer>
          <StyledButton variant="outlined" color="primary" onClick={onClose}>
            취소
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            autoFocus
            type="submit"
          >
            저장
          </StyledButton>
        </ButtonContainer>
      </FormContainer>
    </MModal>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 45%;
`;
