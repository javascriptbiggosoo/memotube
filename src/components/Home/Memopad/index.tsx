import React, { useState } from "react";
import MemoInput from "./MemoInput";
import styled from "styled-components";
import MemoItems from "./MemoItems";
import { Box } from "@mui/material";
import { IMemo } from "../../../types";

interface MemoPadProps {
  currentTime: string;
}

export default function MemoPad({ currentTime }: MemoPadProps) {
  // TODO: 아톰으로 옮기기
  const [memos, setMemos] = useState<IMemo[]>([
    {
      memoTime: "44:23",
      memoText: "아무 장수 챌린지",
      id: "0",
      createdAt: new Date().getTime(),
    },
    {
      memoTime: "1:27:22",
      memoText: "메오대전",
      id: "1",
      createdAt: new Date().getTime(),
    },
  ]);

  function handleMemoSubmit(memoText: string) {
    if (!memoText) return;
    setMemos((prevMemos) => {
      const dateTime = new Date().getTime();

      return [
        ...prevMemos,
        {
          id: crypto.randomUUID(),
          createdAt: dateTime,
          memoTime: currentTime,
          memoText,
        },
      ];
    });
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
    <Section component="section">
      <MemoInput currentTime={currentTime} onCreateMemo={handleMemoSubmit} />
      <MemoItems
        memos={memos}
        onUpdateMemo={handleUpdateMemo}
        onDeleteMemo={handleDeleteMemo}
      />
    </Section>
  );
}

const Section = styled(Box)`
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f5f5f5;
`;
