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
        onClick={(event) => {
          // Box 자체 클릭 이벤트를 차단하지 않도록 수정
          if (event.currentTarget === event.target) {
            handleClose(event);
          }
        }}
        // 가운데 정렬용 스타일
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <ModalBox>{children}</ModalBox>
      </Box>
    </Modal>
  );
}

const ModalBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  box-shadow: 24px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
