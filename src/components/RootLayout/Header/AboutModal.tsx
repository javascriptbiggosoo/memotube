import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

interface AboutModalProps {
  open: boolean;
}

export default function AboutModal({ open }: AboutModalProps) {
  // 모달을 body 태그 바로 아래에 렌더링
  return ReactDOM.createPortal(
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <AboutModalBox>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          메모튜브 사용법
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          대충 스샷 설명 첨부첨부 다음페이지 슬라이드
        </Typography>
      </AboutModalBox>
    </Modal>,
    document.body
  );
}

const AboutModalBox = styled(Box)`
  position: fixed;
  width: 400;
  border: "2px solid #000";
  box-shadow: 24;
  background-color: white;
  top: 50%;
  left: 50%;
`;
