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
      memoTime: "44:23",
      memoText: "아무 장수 챌린지",
      id: "0",
      date: new Date().getTime(),
    },
    {
      memoTime: "1:27:32",
      memoText: "메오대전",
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

  function handleDeleteMemo(id: string) {
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  }
  function handleUpdateMemo(targetId: string, memoText: string) {
    console.log(memoText);
    setMemos((prevMemos) =>
      prevMemos.map((memo) => {
        if (memo.id === targetId) {
          return {
            ...memo,
            memoText,
          };
        }
        return memo;
      })
    );
  }
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
