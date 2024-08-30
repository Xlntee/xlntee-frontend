import { Stack, Typography } from "@mui/material";

import "./Skills.scss";

interface SkillsProps {
  items: string[];
}

const Skills = ({ items }: SkillsProps) => {
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
