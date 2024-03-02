import React from "react";
import styled from "styled-components";

interface MemoProps {
  time: string;
  memo: string;
}

export default function VideoMemo({ time, memo }: MemoProps) {
  return (
    <Container>
      <div>{time}</div>
      <div>{memo}</div>
      <button>x</button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
