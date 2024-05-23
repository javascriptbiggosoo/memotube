import { atom, selector } from "recoil";
import { IVideoMemos } from "../types";

export const dummyVideoMemo = {
  id: "",
  videoId: "hnanNlDbsE4",
  memos: [
    {
      memoTime: "44:23",
      memoText: "아무 장수 챌린지",
      id: "0",
      createdAt: new Date().getTime(),
    },
    {
      memoTime: "1:27:22",
      memoText: "메오대전",
      id: "1",
      createdAt: new Date().getTime(),
    },
  ],
};
export const dummyVideoMemo2 = {
  id: "1",
  videoId: "_OUImhr4I7w",
  memos: [
    {
      memoTime: "3:59",
      memoText: "그 표정",
      id: "0",
      createdAt: new Date().getTime(),
    },
    {
      memoTime: "2:19",
      memoText: "일본의 스키다시 문화",
      id: "1",
      createdAt: new Date().getTime(),
    },
  ],
};

export const videoMemoState = atom<IVideoMemos>({
  key: "videoPostsState",
  default: dummyVideoMemo,
});

export const memoSelector = selector({
  key: "memoSelector",
  get: ({ get }) => {
    const videoMemo = get(videoMemoState);
    return videoMemo.memos;
  },
});
