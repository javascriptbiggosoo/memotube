import React, { useEffect, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Container } from "@mui/material";
import { pauseVideoState, playerVarsState } from "../../atoms/videoPlayerAtoms";

interface Props {
  videoId: string;
  onStateChange?: (event: YouTubeEvent) => void;
}

export const YouTubeVideo = ({ videoId, onStateChange }: Props) => {
  const [player, setPlayer] = useState<typeof YouTubePlayer>();
  const [pauseVideo, setPauseVideo] = useRecoilState(pauseVideoState);
  const playerVars = useRecoilValue(playerVarsState);

  useEffect(() => {
    if (player && pauseVideo) {
      player.pauseVideo();
      setPauseVideo(false);
    }
  }, [pauseVideo]);

  const handlePlayerReady = (event: YouTubeEvent) => {
    setPlayer(event.target);
  };

  const opts = {
    playerVars,
    width: "100%",
    height: "100%",
  };

  return (
    <VideoContainer>
      <YouTube
        videoId={videoId}
        opts={opts}
        onStateChange={onStateChange}
        onReady={handlePlayerReady}
      />
    </VideoContainer>
  );
};

const VideoContainer = styled(Container)`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  margin: 1rem auto;
  text-align: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
