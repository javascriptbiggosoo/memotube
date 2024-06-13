import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export interface MModalProps {
  open: boolean;
  // 백드롭 클릭 시 호출되는 함수인데 여기선 가운데 정렬용 Box 때문에 발동될 것 같진 않음
  children: React.ReactNode;
  onClose: (event: React.MouseEvent) => void;
}

export default function MModal({ open, onClose, children }: MModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBackdrop
        onClick={(event) => {
          if (event.currentTarget === event.target) {
            onClose(event);
          }
        }}
      >
        <ModalBox>
          <IconButton
            onClick={onClose}
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
