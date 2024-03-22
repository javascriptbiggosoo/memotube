import React, { useEffect, useState } from "react";
import {
  Avatar,
  IconButton,
  Input,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSetRecoilState } from "recoil";

import { playerVarsState } from "../../../atoms/video";
import parseTimeToSeconds from "../../../utils/parseTimeToSeconds";
import { useForm } from "react-hook-form";

interface MemoProps {
  time: string;
  memoText: string;
  id: string;
  onUpdateMemo: (id: string, memoText: string) => void;
  onDeleteMemo: (id: string) => void;
}

type FormValues = {
  memoText: string;
};

export default function MemoItem({
  time,
  memoText,
  onDeleteMemo,
  onUpdateMemo,
  id,
}: MemoProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const setplayerVars = useSetRecoilState(playerVarsState);
  const { register, handleSubmit, setFocus } = useForm<FormValues>();

  useEffect(() => {
    if (isUpdating) {
      setFocus("memoText");
    }
  }, [isUpdating, setFocus]);
  // TODO: 인풋 value 초기화

  const handleEditClick = () => {
    setIsUpdating((prev) => !prev);
  };
  const handleDeleteClick = () => {
    onDeleteMemo(id);
  };

  return (
    <ListItem
      style={{ cursor: "pointer" }}
      onClick={() => {
        setplayerVars({
          autoplay: 1,
          start: parseTimeToSeconds(time),
        });
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar onClick={handleEditClick}>
        <Avatar>
          <EditNoteIcon />
        </Avatar>
      </ListItemAvatar>

      {isUpdating ? (
        <form
          onSubmit={handleSubmit((data) => {
            onUpdateMemo(id, data.memoText);
            setIsUpdating(false);
          })}
        >
          <Input {...register("memoText")} />
        </form>
      ) : (
        <ListItemText primary={memoText} secondary={time} />
      )}
    </ListItem>
  );
}
