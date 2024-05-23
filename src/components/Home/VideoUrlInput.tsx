import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import extractYouTubeID from "../../utils/extractYouTubeID";
import { TextField } from "@mui/material";

type FormValues = {
  url: string;
};

interface VideoUrlInputProps {
  onUrlSubmit: (url: string) => void;
}

export default function VideoUrlInput({ onUrlSubmit }: VideoUrlInputProps) {
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO: 이전 메모 비우기
    // TODO: 이전 메모 비워지는거 경고창으로 물어보기
    const url = extractYouTubeID(data.url);
    if (url) {
      onUrlSubmit(url);
      setValue("url", "");
    } else {
      console.log("유효하지 않은 URL");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="url-input"
        label="영상 URL"
        variant="filled"
        color="primary"
        {...register("url")}
        fullWidth
      />
    </form>
  );
}
