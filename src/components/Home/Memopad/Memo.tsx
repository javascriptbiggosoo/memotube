import React from "react";
import styled from "styled-components";

interface MemoProps {
  time: string;
  memo: string;
}

export default function Memo({ time, memo }: MemoProps) {
  return (
    <Container>
      <div>{time}</div>
      <div>{memo}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
