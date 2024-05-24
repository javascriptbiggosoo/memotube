import { atom } from "recoil";
import { IMyMemo } from "../types";
import { dummyVideoMemo, dummyVideoMemo2 } from "./videoMemoAtoms";

const dummyMyList = [
  {
    id: "11",
    thumbnail: "https://img.youtube.com/vi/_OUImhr4I7w/default.jpg",
    title: "마츠다 부장",
    content: dummyVideoMemo2,
    createdAt: new Date().getTime(),
  },
  {
    id: "1",
    thumbnail: "https://img.youtube.com/vi/hnanNlDbsE4/default.jpg",
    title: "침국지",
    content: dummyVideoMemo,
    createdAt: new Date().getTime(),
  },
];

export const myVideoMemoListState = atom<IMyMemo[]>({
  key: "myVideoMemoList",
  default: dummyMyList,
});
