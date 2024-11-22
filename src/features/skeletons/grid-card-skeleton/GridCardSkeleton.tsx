import { FC } from "react";

import { Box, Container } from "@mui/material";
import { CardList } from "src/features/card-list";
import { CardSkeleton } from "../card-skeleton";

const GridCards: FC = () => {
  const list = [
    {
      id: "1"
    },
    {
      id: "2"
    },
    {
      id: "3"
    }
  ];

  return (
    <Box py="40px">
      <Container>
        <CardList items={list} renderCard={() => <CardSkeleton />} />
      </Container>
    </Box>
  );
};

export default GridCards;
