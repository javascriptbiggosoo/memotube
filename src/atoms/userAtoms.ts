import { atom } from "recoil";
import { IUser } from "../types";

export const currentUserState = atom<IUser | null>({
  key: "currentUserState",
  default: null,
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedInState",
  default: false,
});
