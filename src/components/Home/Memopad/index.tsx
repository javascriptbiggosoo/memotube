import React, { useState } from "react";
import MemoItem from "./MemoItem";
import MemoInput from "./MemoInput";
import Memo from "../../../types/memo";
import { List } from "@mui/material";
import styled from "styled-components";

interface MemoPadProps {
  currentTime: string;
}

export default function MemoPad({ currentTime }: MemoPadProps) {
  const [memos, setMemos] = useState<Memo[]>([
    { time: "00:00", memoText: "등록된 메모입니다.", id: "1" },
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
    <Section>
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
    </Section>
  );
}

const Section = styled.section`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
