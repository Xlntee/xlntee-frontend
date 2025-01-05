import { FC, useRef, useState } from "react";

import { Box, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import "./Video.scss";

type VideoProps = {
  video: string;
  type: string;
};

const Video: FC<VideoProps> = ({ video, type }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function onPlayVideo(): void {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <Box className="course-video base-shadow">
      <video ref={videoRef} width="320" height="240" {...(isPlaying && { controls: true })}>
        <source src={video} type={type} />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <Button className="course-video__toggle-play" onClick={onPlayVideo}>
          <PlayCircleFilledWhiteIcon />
        </Button>
      )}
    </Box>
  );
};

export default Video;
