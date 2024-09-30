import { Box, Container, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { CertificateCard } from "src/features";
import { AppRoutes } from "src/app/routing/appRoutes";

import { myCertificates } from "./data";

const CertificatesPage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box component="section" py={7}>
      <Container>
        <Grid container spacing={2}>
          {myCertificates.length > 0
            ? myCertificates.map((certificate) => (
                <Grid item key={certificate.id} xs={12} sm={6} md={4}>
                  <CertificateCard
                    image={certificate.image}
                    title={certificate.title}
                    href={`${AppRoutes.student.certificates}/${certificate.id}`}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default CertificatesPage;
