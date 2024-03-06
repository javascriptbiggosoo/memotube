import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { playerState } from "../../../atoms/video";

type FormValues = {
  memo: string;
};
interface MemoInputProps {
  onMemoSubmit: (memo: string) => void;
  currentTime: string;
}

export default function MemoInput({
  onMemoSubmit,
  currentTime,
}: MemoInputProps) {
  const { register, handleSubmit } = useForm<FormValues>();
  const player = useRecoilValue(playerState);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
  };
  const handleFocus = () => {
    // TODO: 일시정지 + 시간 받아옴
    player.pauseVideo();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="memo-input"
        label={currentTime}
        variant="outlined"
        {...register("memo")}
        fullWidth
        onFocus={handleFocus}
      />

      <Button type="submit">메모 저장</Button>
    </form>
  );
}
