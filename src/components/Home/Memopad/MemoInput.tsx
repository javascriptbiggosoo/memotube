import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
  };
  const handleFocus = () => {
    // 시간 받아옴
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
