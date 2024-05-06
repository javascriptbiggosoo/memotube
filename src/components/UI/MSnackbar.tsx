import React from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";
import { isDescState } from "../../atoms/desc";

interface MSnackbarProps {
  message: string;
  open: boolean;
  onSnackbarClose: () => void;
}

const MSnackbar = ({ message, onSnackbarClose, open }: MSnackbarProps) => {
  const isDesc = useRecoilValue(isDescState);
  const autoHideDuration = 6000;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isDesc && open}
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
