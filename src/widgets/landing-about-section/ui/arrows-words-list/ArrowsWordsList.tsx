import React from "react";
import { Stack, Typography } from "@mui/material";

import "./ArrowsWordsList.scss";

interface ArrowsWordsListProps {
  wordsArray: string[];
}

const ArrowsWordsList: React.FC<ArrowsWordsListProps> = ({ wordsArray }) => {
  const isWordsListArray = Array.isArray(wordsArray);

  return (
    <Stack className="arrows-words-list" direction="row">
      {isWordsListArray &&
        wordsArray.map((word, index) => (
          <Typography key={index} color="primary" className="arrows-words-list__item">
            {word}
          </Typography>
        ))}
    </Stack>
  );
};

export default ArrowsWordsList;
