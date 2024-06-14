import React from "react";
import MModal, { MModalProps } from "../../../common/MModal";

interface Props extends MModalProps {}

export default function AddPostModal({ open, onClose }: Props) {
  return (
    <MModal open={open} onClose={onClose}>
      AddPostModal
    </MModal>
  );
}
