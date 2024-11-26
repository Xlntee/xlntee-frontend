import { FC } from "react";

import { Stack, Typography } from "@mui/material";

import "./Skills.scss";

type SkillsProps = {
  items: string[];
};

const Skills: FC<SkillsProps> = ({ items }) => {
  return (
    <Stack className="skills" direction="row" flexWrap="wrap" justifyContent="center" gap="10px">
      {items.map((item, index) => (
        <Typography key={index} variant="body1" className="skills__item">
          {item}
        </Typography>
      ))}
    </Stack>
  );
};

export default Skills;
