import { FC } from "react";

import { Box, Container, Grid, Stack, Skeleton } from "@mui/material";

const GridCards: FC = () => {
  const list = [1, 2, 3];
  return (
    <Box py="40px">
      <Container>
        <Grid container spacing="20px">
          {list.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <Box mb="10px">
                <Skeleton variant="rectangular" width="100%" height={140} />
              </Box>
              <Stack paddingBlock="10px" paddingInline="6px" gap="10px">
                <Skeleton variant="rectangular" width="100%" height="18px" />
                <Skeleton variant="rectangular" width="100%" height="18px" />
                <Skeleton variant="rectangular" width="100%" height="22px" />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GridCards;
