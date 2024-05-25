import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import extractYouTubeID from "../../../utils/extractYouTubeID";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

type FormValues = {
  url: string;
};

interface VideoUrlInputProps {
  onUrlSubmit: (url: string) => void;
}

export default function VideoUrlInput({ onUrlSubmit }: VideoUrlInputProps) {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [url, setUrl] = useState("");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const url = extractYouTubeID(data.url);
    if (url) {
      setUrl(url);
      setDialogOpen(true);
    } else {
      alert("유효하지 않은 URL입니다.");
      console.log("유효하지 않은 URL");
    }
  };

  const handleClose = (confirm: boolean) => {
    if (confirm) {
      onUrlSubmit(url);
      setValue("url", "");
    }
    setDialogOpen(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="url-input"
          label="YouTube 영상 URL"
          variant="filled"
          color="primary"
          {...register("url")}
          fullWidth
        />
      </form>
      <Dialog
        open={dialogOpen}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">URL 변경 확인</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            재생 중인 영상을 변경시 영상의 메모가 초기화됩니다.
            계속하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            취소
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
