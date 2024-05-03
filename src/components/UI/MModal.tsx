import React from "react";
import { Box, Modal } from "@mui/material";
import styled from "styled-components";

interface MModalProps {
  open: boolean;
  // 백드롭 클릭 시 호출되는 함수인데 여기선 가운데 정렬용 Box 때문에 발동될 것 같진 않음
  children: React.ReactNode;
  handleClose: (event: React.MouseEvent) => void;
}

export default function MModal({ open, handleClose, children }: MModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        onClick={handleClose}
        // 가운데 정렬용 스타일
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // 전체 뷰포트 높이를 사용
        }}
      >
        <AboutModalBox>{children}</AboutModalBox>
      </Box>
    </Modal>
  );
}

const AboutModalBox = styled(Box)`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  width: 400px;
  border: "2px solid #000";
  box-shadow: 24;
  background-color: white;
`;
