import { Grid, GridSize, Stack } from "@mui/material";

import { PlaceholderCard } from "src/features";

interface ResponsiveType {
  xs: GridSize;
  sm: GridSize;
  md: GridSize;
  lg: GridSize;
  xl: GridSize;
}

interface CardListProps<T> {
  items: T[];
  startCard?: React.ReactNode;
  renderCard?: (item: T) => React.ReactNode;
  textForEmptyArray?: string;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const defaultResponsive: ResponsiveType = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 4,
  xl: 4
};

const CardList = <T extends { id: string }>({
  items,
  startCard,
  renderCard,
  textForEmptyArray,
  xs = defaultResponsive.xs,
  sm = defaultResponsive.sm,
  md = defaultResponsive.md,
  lg = defaultResponsive.lg,
  xl = defaultResponsive.xl
}: CardListProps<T>): JSX.Element => {
  return (
    <Grid container spacing={2}>
      {startCard && (
        <Grid
          item
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          display="flex"
          sx={{
            minHeight: items.length === 0 ? "20vh" : "30vh"
          }}
        >
          {startCard}
        </Grid>
      )}
      {items.length ? (
        <>
          {items.map((item) => (
            <Grid item key={item.id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              {renderCard && renderCard(item)}
            </Grid>
          ))}
        </>
      ) : (
        <>
          {textForEmptyArray && (
            <Stack direction="row" justifyContent="center">
              <PlaceholderCard text={textForEmptyArray} />
            </Stack>
          )}
        </>
      )}
    </Grid>
  );
};

export default CardList;
