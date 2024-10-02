import React, { Fragment } from "react";
import { Stack, Typography } from "@mui/material";

interface ArrowsWordsListProps {
  wordsArray: string[];
}

const ArrowsWordsList: React.FC<ArrowsWordsListProps> = ({ wordsArray }) => {
  const isWordsListArray = Array.isArray(wordsArray);

  return (
    <Stack
      className="arrows-words-list"
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      rowGap="4px"
      columnGap={{ xs: "10px", lg: "20px" }}
    >
      {isWordsListArray &&
        wordsArray.map((word, index, arr) => (
          <Fragment key={index}>
            <Typography color="primary" fontWeight={300} fontSize={{ md: "24px" }}>
              {word}
            </Typography>
            {index !== arr.length - 1 && <Typography color="primary">{">"}</Typography>}
          </Fragment>
        ))}
    </Stack>
  );
};

export default ArrowsWordsList;
