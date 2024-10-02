import { FC } from "react";

import { Box, Checkbox, Stack, FormLabel, Typography, Button, FormControlLabel } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CommentIcon from "@mui/icons-material/Comment";

import "./Tools.scss";

interface ToolsProps {}

const Tools: FC<ToolsProps> = ({}) => {
  return (
    <Stack className="course-tools" direction="row" flexWrap="wrap" gap="10px" justifyContent="space-between">
      <Stack direction="row" alignItems="center" gap="10px">
        <Button variant="black-text" className="course-tools__button">
          <ArrowBackIcon />
        </Button>
        <Button variant="black-text" className="course-tools__button">
          <TextSnippetIcon />
        </Button>
        <Button variant="black-text" className="course-tools__button">
          <CommentIcon />
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center" gap="10px">
        <FormControlLabel control={<Checkbox />} label="Completed lecture" className="course-tools__label" />
        <Button variant="black-text" className="course-tools__button">
          <ArrowForwardIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Tools;
