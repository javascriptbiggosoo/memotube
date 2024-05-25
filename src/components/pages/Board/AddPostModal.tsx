import React from "react";

interface AddPostModalProps {
  open: boolean;
  onClose: (event: React.MouseEvent) => void;
}

export default function AddPostModal({ open, onClose }: AddPostModalProps) {
  return (
    <MModal open={open} onClose={onClose}>
      AddPostModal
    </MModal>
  );
}
