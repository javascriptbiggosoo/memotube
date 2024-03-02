import { Button, TextField } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  memo: string;
};
interface MemoInputProps {
  onMemoSubmit: (memo: string) => void;
}

export default function MemoInput({ onMemoSubmit }: MemoInputProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="memo-input"
        label="00:00"
        variant="outlined"
        {...register("memo")}
        fullWidth
      />

      <Button type="submit">메모 저장</Button>
    </form>
  );
}
