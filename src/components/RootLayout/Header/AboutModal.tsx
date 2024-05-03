import React from "react";
import { Typography } from "@mui/material";
import MModal from "../../UI/MModal";

interface AboutModalProps {
  open: boolean;
  // 백드롭 클릭 시 호출되는 함수인데 여기선 가운데 정렬용 Box 때문에 발동될 것 같진 않음
  handleClose: (event: React.MouseEvent) => void;
}

export default function AboutModal({ open, handleClose }: AboutModalProps) {
  return (
    <MModal open={open} handleClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        메모튜브 사용법
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        메모튜브는 유튜브 영상의 메모를 작성하고 관리할 수 있는 서비스입니다.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        대충 스샷 설명 첨부첨부 다음페이지 슬라이드
      </Typography>
    </MModal>
  );
}
