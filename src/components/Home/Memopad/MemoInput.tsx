import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { pauseVideoState } from "../../../atoms/video";

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
  const setPauseVideo = useSetRecoilState(pauseVideoState);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onMemoSubmit(data.memo);
    setValue("memo", "");
    setPauseVideo(false);
  };
  const handleFocus = () => {
    setPauseVideo(true);
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
