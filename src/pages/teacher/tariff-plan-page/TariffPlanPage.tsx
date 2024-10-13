import { FC } from "react";
import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { PricePlanList } from "src/widgets/components";

const TariffPlanPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  return (
    <Box component="section" py={7}>
      <Container>
        <Box maxWidth="1050px" marginInline="auto">
          <PricePlanList />
        </Box>
      </Container>
    </Box>
  );
};

export default TariffPlanPage;
