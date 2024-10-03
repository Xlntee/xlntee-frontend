import { FC, useState } from "react";
import cn from "classnames";

import { Checkbox, Stack, Button, FormControlLabel } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CommentIcon from "@mui/icons-material/Comment";

import "./Tools.scss";

interface ToolsProps {
  onClickTab: (value: string) => void;
}

export enum ToolsTabEnum {
  Description = "description",
  Comments = "comments",
}

const Tools: FC<ToolsProps> = ({ onClickTab }) => {
  const [tab, setTab] = useState<string>(ToolsTabEnum.Description);

  function onChooseTab(value: string) {
    onClickTab(value);
    setTab(value);
  }

  return (
    <Stack className="course-tools" direction="row" flexWrap="wrap" gap="10px" justifyContent="space-between">
      <Stack direction="row" alignItems="center" gap="10px">
        <Button variant="black-text" className="course-tools__button">
          <ArrowBackIcon />
        </Button>
        <Button
          variant="black-text"
          className={cn("course-tools__button", { active: tab === ToolsTabEnum.Description })}
          onClick={() => onChooseTab(ToolsTabEnum.Description)}
        >
          <TextSnippetIcon />
        </Button>
        <Button
          variant="black-text"
          className={cn("course-tools__button", { active: tab === ToolsTabEnum.Comments })}
          onClick={() => onChooseTab(ToolsTabEnum.Comments)}
        >
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
