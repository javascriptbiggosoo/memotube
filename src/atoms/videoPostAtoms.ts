import { atom } from "recoil";

// 곧 메모.. 유저정보.. 다 통합해야함
interface IVideoPost {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string; // `https://img.youtube.com/vi/[video-id]/default.jpg`
  createdAt: string;
  userId: string;
  likes: number;
}

export const videoPostsState = atom<IVideoPost[]>({
  key: "videoPostsState",
  default: [],
});
