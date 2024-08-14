import { Box, Typography } from "@mui/material";
import React from "react";

interface ArrowsWordsListProps {
  wordsArray: string[];
}

const ArrowsWordsList: React.FC<ArrowsWordsListProps> = ({ wordsArray }) => {
  const isWordsListArray = Array.isArray(wordsArray);

  return (
    <Box display="flex" alignItems="center" gap={5}>
      {isWordsListArray &&
        wordsArray.map((word, index) => (
          <Typography
            key={index}
            color="primary"
            sx={{
              fontWeight: 300,
              position: "relative",
              "&::after": {
                content: '"\\003E"',
                color: (theme) => theme.palette.primary.main,
                position: "absolute",
                right: "-28px",
              },
              "&:last-child::after": {
                content: '""',
              },
            }}
            variant="h5"
          >
            {word}
          </Typography>
        ))}
    </Box>
  );
};

export default ArrowsWordsList;
