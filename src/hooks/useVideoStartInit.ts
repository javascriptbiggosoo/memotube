import { useSetRecoilState } from "recoil";
import { playerVarsState } from "../atoms/videoPlayerAtoms";
import { useEffect } from "react";

export const useVideoStartInit = () => {
  const setplayerVars = useSetRecoilState(playerVarsState);

  useEffect(() => {
    setplayerVars({
      autoplay: 0,
      start: 0,
    });
  }, []);
};
