import React from "react";
import { Typography } from "@mui/material";
import MModal from "../../../UI/MModal";

interface AuthModalProps {
  open: boolean;
  handleClose: (event: React.MouseEvent) => void;
}

export default function AuthModal({ open, handleClose }: AuthModalProps) {
  return (
    <MModal open={open} handleClose={handleClose}>
      <Typography variant="h6" textAlign="center">
        Login
      </Typography>
    </MModal>
  );
}
