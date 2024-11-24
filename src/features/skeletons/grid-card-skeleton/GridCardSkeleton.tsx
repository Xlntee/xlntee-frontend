import { FC, useEffect, useState } from "react";

import { Box, Container } from "@mui/material";
import { CardList } from "src/features/card-list";
import { CardSkeleton } from "../card-skeleton";

type GridCardsProps = {
  countItems: number;
};

const GridCards: FC<GridCardsProps> = ({ countItems }) => {
  const [list, setList] = useState<{ id: string }[]>([]);

  function fillList(): void {
    const defaultArray = Array.from(Array(countItems).keys());
    let updateArray: { id: string }[] = [];

    defaultArray.forEach((item) => {
      updateArray.push({
        id: item.toString()
      });
    });

    setList(updateArray);
  }

  useEffect(() => {
    fillList();
  }, []);

  return (
    <Box py="40px">
      <Container>
        <CardList items={list} renderCard={() => <CardSkeleton />} />
      </Container>
    </Box>
  );
};

export default GridCards;
