import React from "react";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSetRecoilState } from "recoil";

import { playerVarsState } from "../../../atoms/video";
import parseTimeToSeconds from "../../../utils/parseTimeToSeconds";

interface MemoProps {
  time: string;
  memoText: string;
  onUpdateMemo: (id: string, memoText: string) => void;
  onDeleteMemo: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MemoItem({
  time,
  memoText: memo,
  onDeleteMemo,
  onUpdateMemo,
}: MemoProps) {
  const setplayerVars = useSetRecoilState(playerVarsState);

  const handleClick = () => {
    onUpdateMemo("1", "수정된 메모입니다.");
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
        <IconButton edge="end" aria-label="delete" onClick={onDeleteMemo}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar onClick={handleClick}>
        <Avatar>
          <EditNoteIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={memo} secondary={time} />
    </ListItem>
  );
}
