import { List } from "@mui/material";
import React from "react";
import MemoItem from "./MemoItem";
import { IMemo } from "../../../types";

interface Props {
  memos: IMemo[];
  onUpdateMemo?: (id: string, memoText: string) => void;
  onDeleteMemo?: (id: string) => void;
}

export default function MemoItems({
  memos,
  onDeleteMemo,
  onUpdateMemo,
}: Props) {
  return (
    <List>
      {memos.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          time={memo.memoTime}
          memoText={memo.memoText}
          onDeleteMemo={onDeleteMemo}
          onUpdateMemo={onUpdateMemo}
        />
      ))}
    </List>
  );
}
