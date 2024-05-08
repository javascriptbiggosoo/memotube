import React, { useState } from "react";
import { Typography } from "@mui/material";
import MModal from "../../../UI/MModal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthModalProps {
  open: boolean;
  handleClose: (event: React.MouseEvent) => void;
}

export default function AuthModal({ open, handleClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MModal open={open} handleClose={handleClose}>
      <Typography variant="h6" textAlign="center">
        로그인
      </Typography>

      {isLogin ? <LoginForm /> : <SignupForm />}

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
      </Typography>
    </MModal>
  );
}
