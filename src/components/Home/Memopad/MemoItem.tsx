import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
interface MemoProps {
  time: string;
  memoText: string;
  onDeleteMemo: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MemoItem({
  time,
  memoText: memo,
  onDeleteMemo,
}: MemoProps) {
  return (
    <Container
      onClick={() => {}}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDeleteMemo}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <EditNoteIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={memo} secondary={time} />
    </Container>
  );
}

const Container = styled(ListItem)`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; */
`;
