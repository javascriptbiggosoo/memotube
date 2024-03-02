import React, { useState } from "react";
import VideoMemo from "./VideoMemo";
import MemoInput from "./MemoInput";
import Memo from "../../../types/memo";

export default function MemoPad() {
  const [memos, setMemos] = useState<Memo[]>([
    { time: "0:00", memoText: "앙", id: "1" },
  ]);

  function handleMemoSubmit(memo: string) {
    setMemos((prevMemos) => {
      return [
        ...prevMemos,
        { time: "0:00", memoText: memo, id: crypto.randomUUID() },
      ];
    });
  }
  return (
    <div>
      <MemoInput onMemoSubmit={handleMemoSubmit} />
      <ul>
        {memos.map((memo) => (
          <VideoMemo key={memo.id} time={memo.time} memo={memo.memoText} />
        ))}
      </ul>
    </div>
  );
}
