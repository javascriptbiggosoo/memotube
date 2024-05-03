import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import styled from "styled-components";

interface AboutModalProps {
  open: boolean;
  // 백드롭 클릭 시 호출되는 함수인데 여기선 가운데 정렬용 Box 때문에 발동될 것 같진 않음
  handleClose: (event: React.MouseEvent) => void;
}

export default function AboutModal({ open, handleClose }: AboutModalProps) {
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
        <AboutModalBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            메모튜브 사용법
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            메모튜브는 유튜브 영상의 메모를 작성하고 관리할 수 있는
            서비스입니다.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            대충 스샷 설명 첨부첨부 다음페이지 슬라이드
          </Typography>
        </AboutModalBox>
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
