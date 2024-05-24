import React from "react";
import MemoInput from "./MemoInput";
import styled from "styled-components";
import MemoItems from "./MemoItems";
import { Box } from "@mui/material";
import { IMemo } from "../../../types";

interface MemoPadProps {
  currentTime: string;
  memos?: IMemo[];
  setMemos?: React.Dispatch<React.SetStateAction<IMemo[]>>;
}

export default function MemoPad({
  currentTime,
  memos,
  setMemos,
}: MemoPadProps) {
  function handleMemoSubmit(memoText: string) {
    if (!memoText) return;
    if (!setMemos) return;
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
    if (!setMemos) return;

    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  }
  function handleUpdateMemo(targetId: string, memoText: string) {
    console.log(memoText);
    if (!setMemos) return;

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
        memos={memos || []}
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
