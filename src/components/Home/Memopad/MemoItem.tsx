import React, { useState } from "react";
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

interface MemoProps {
  time: string;
  memoText: string;
  id: string;
  onUpdateMemo: (id: string, memoText: string) => void;
  onDeleteMemo: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MemoItem({
  time,
  memoText,
  onDeleteMemo,
  onUpdateMemo,
  id,
}: MemoProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const setplayerVars = useSetRecoilState(playerVarsState);

  const handleClick = () => {
    // TODO: 메모 수정 활성
    setIsUpdating((prev) => !prev);
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

      {isUpdating ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdateMemo(id, memoText);
            setIsUpdating(false);
          }}
        >
          <Input type="text" value={memoText} />
        </form>
      ) : (
        <ListItemText primary={memoText} secondary={time} />
      )}
    </ListItem>
  );
}
