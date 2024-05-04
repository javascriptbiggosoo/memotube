import React from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MSnackbarProps {
  message: string;
  open: boolean;
  onSnackbarClose: () => void;
}

// TODO: 설명 안보기 모드 제공
const MSnackbar = ({ message, onSnackbarClose, open }: MSnackbarProps) => {
  const autoHideDuration = 6000;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onSnackbarClose}
    >
      <SnackbarContent
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default MSnackbar;
