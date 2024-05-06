import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

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
      <ModalBackdrop
        onClick={(event) => {
          // Box 자체 클릭 이벤트를 차단하지 않도록 수정
          if (event.currentTarget === event.target) {
            handleClose(event);
          }
        }}
        // 가운데 정렬용 스타일
      >
        <ModalBox>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {children}
        </ModalBox>
      </ModalBackdrop>
    </Modal>
  );
}

const ModalBackdrop = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ModalBox = styled(Box)`
  position: relative;
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
