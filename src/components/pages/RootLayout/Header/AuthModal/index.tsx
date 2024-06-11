import React, { useState } from "react";
import { Typography } from "@mui/material";
import MModal from "../../../../UI/MModal";
import LoginForm from "./LoginForm";

interface AuthModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function AuthModal({ open, handleClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MModal open={open} onClose={handleClose}>
      <Typography variant="h6" textAlign="center">
        {isLogin ? "로그인" : "회원가입"}
      </Typography>

      <LoginForm
        mode={isLogin ? "login" : "signup"}
        handleClose={handleClose}
      />

      <Typography sx={{ mt: 2, color: "grey" }}>
        비밀번호는 6자 이상입니다.
      </Typography>

      <Typography textAlign="center" sx={{ mt: 2 }}>
        {isLogin ? "계정이 없으신가요? " : "계정이 있으신가요?"}
        <Typography
          component="span"
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "가입하기" : "로그인하기"}
        </Typography>

        {/* TODO: 더미 계정 로그인 */}
      </Typography>
    </MModal>
  );
}
