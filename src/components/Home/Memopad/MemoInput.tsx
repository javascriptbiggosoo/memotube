import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { Button, TextField } from "@mui/material";
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
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const player = useRecoilValue(playerState);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
    setValue("memo", "");
  };
  const handleFocus = () => {
    player.pauseVideo();
    // TODO: 시간 받아오기
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
