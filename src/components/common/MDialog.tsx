import React, { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface DialogProps {
  open: boolean;
  title: string;
  onClose: (confirm: boolean) => void;
  children: ReactNode;
}

const MDialog = ({ open, title, onClose, children }: DialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)} color="primary">
          취소
        </Button>
        <Button onClick={() => onClose(true)} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MDialog;
