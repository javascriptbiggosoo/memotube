import { atom } from "recoil";

export const isDescState = atom<boolean>({
  key: "descState",
  default: true,
});
