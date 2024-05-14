import { YouTubePlayer } from "react-youtube";
import { atom } from "recoil";

type PlayerVars = {
  autoplay: number;
  start: number;
};

export const playerVarsState = atom<PlayerVars>({
  key: "playerVarsState",
  default: {
    autoplay: 0,
    start: 0,
  },
});

export const playerState = atom<typeof YouTubePlayer>({
  key: "playerState",
  default: null,
});

export const pauseVideoState = atom<boolean>({
  key: "pauseVideoState",
  default: true,
});
