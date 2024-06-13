import React from "react";
import MModal from "../../common/MModal";

interface AddPostModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddPostModal({ open, onClose }: AddPostModalProps) {
  return (
    <MModal open={open} onClose={onClose}>
      AddPostModal
    </MModal>
  );
}
