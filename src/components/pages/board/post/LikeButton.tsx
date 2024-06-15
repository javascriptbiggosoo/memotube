import { Button } from "@mui/material";
import React from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  likeCount: number;
}
export default function LikeButton({ onClick, likeCount }: Props) {
  return (
    <LikeButtonStyle onClick={onClick} size="large" color="error">
      <FaHeart />
      {likeCount || 0}
    </LikeButtonStyle>
  );
}

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;
