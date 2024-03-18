import React, { useState } from "react";
import MemoInput from "./MemoInput";
import Memo from "../../../types/memo";
import styled from "styled-components";
import MemoItems from "./MemoItems";

interface MemoPadProps {
  currentTime: string;
}

export default function MemoPad({ currentTime }: MemoPadProps) {
  const [memos, setMemos] = useState<Memo[]>([
    {
      memoTime: "00:00",
      memoText: "등록된 메모입니다.",
      id: "1",
      date: new Date().getTime(),
    },
  ]);

  function handleMemoSubmit(memoText: string) {
    if (!memoText) return;
    setMemos((prevMemos) => [
      ...prevMemos,
      {
        id: crypto.randomUUID(),
        date: new Date().getTime(),
        memoTime: currentTime,
        memoText,
      },
    ]);
  }

  function handleDeleteMemo() {}
  function handleUpdateMemo() {}
  return (
    <Section>
      <MemoInput currentTime={currentTime} onCreateMemo={handleMemoSubmit} />
      <MemoItems
        memos={memos}
        onUpdateMemo={handleUpdateMemo}
        onDeleteMemo={handleDeleteMemo}
      />
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
