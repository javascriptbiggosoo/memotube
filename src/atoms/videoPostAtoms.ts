import { atom } from "recoil";
import { dummyVideoMemo, dummyVideoMemo2 } from "./videoMemoAtoms";
import { IPost } from "../types";

export const dummyPost = [
  {
    id: crypto.randomUUID(),
    thumbnail: "https://img.youtube.com/vi/hnanNlDbsE4/mqdefault.jpg",
    title: "침국지 드립 모음",
    content: dummyVideoMemo,
    author: "User",
    createdAt: new Date().getTime(),
    likeCount: 0,
    category: "humor",
    likes: { likeCount: 0, likedUser: [] },
  },
  {
    id: crypto.randomUUID(),
    thumbnail: "https://img.youtube.com/vi/_OUImhr4I7w/mqdefault.jpg",
    title: "마츠다 부장",
    content: dummyVideoMemo2,
    author: "User",
    createdAt: new Date().getTime(),
    likeCount: 0,
    category: "humor",
    likes: { likeCount: 0, likedUser: [] },
  },
];

export const videoPostsState = atom<IPost[]>({
  key: "videoPostsState",
  default: [...dummyPost],
});
