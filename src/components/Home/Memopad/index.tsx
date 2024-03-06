import React, { useState } from "react";
import MemoItem from "./MemoItem";
import MemoInput from "./MemoInput";
import Memo from "../../../types/memo";
import { List } from "@mui/material";

interface MemoPadProps {
  currentTime: string;
}

export default function MemoPad({ currentTime }: MemoPadProps) {
  const [memos, setMemos] = useState<Memo[]>([
    { time: "0:00", memoText: "등록된 메모입니다.", id: "1" },
  ]);

  function handleMemoSubmit(memoText: string) {
    if (!memoText) return;
    setMemos((prevMemos) => {
      return [
        ...prevMemos,
        { time: currentTime, memoText, id: crypto.randomUUID() },
      ];
    });
  }
  function handleDeleteMemo() {}
  return (
    <div>
      <MemoInput currentTime={currentTime} onMemoSubmit={handleMemoSubmit} />
      <List>
        {memos.map((memo) => (
          <MemoItem
            key={memo.id}
            time={memo.time}
            memoText={memo.memoText}
            onDeleteMemo={handleDeleteMemo}
          />
        ))}
      </List>
    </div>
  );
}
