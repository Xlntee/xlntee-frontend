import { FC } from "react";

import { Box, Stack, Skeleton } from "@mui/material";

const CardSkeleton: FC = () => {
  return (
    <Box>
      <Box mb="10px">
        <Skeleton variant="rectangular" width="100%" height={140} />
      </Box>
      <Stack paddingBlock="10px" paddingInline="6px" gap="10px">
        <Skeleton variant="rectangular" width="100%" height="18px" />
        <Skeleton variant="rectangular" width="100%" height="18px" />
        <Skeleton variant="rectangular" width="100%" height="22px" />
      </Stack>
    </Box>
  );
};

export default CardSkeleton;
