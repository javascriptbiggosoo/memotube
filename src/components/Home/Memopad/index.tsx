import React from "react";
import Memo from "./Memo";
import MemoInput from "./MemoInput";

interface MemoPadProps {
  memos: { time: string; memo: string }[];
  onAddMemo: (memo: { time: string; memo: string }) => void;
}

export default function MemoPad({ memos, onAddMemo }: MemoPadProps) {
  function handleMemoSubmit(memo: string) {
    onAddMemo({ time: "00:00", memo });
  }
  return (
    <div>
      <MemoInput onMemoSubmit={handleMemoSubmit} />
      {memos.map((memo, index) => (
        <Memo key={index} time={memo.time} memo={memo.memo} />
      ))}
    </div>
  );
}
