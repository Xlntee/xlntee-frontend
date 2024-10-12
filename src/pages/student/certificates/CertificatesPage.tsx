import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { CardList, CertificateCard } from "src/features";
import { AppRoutes } from "src/app/routing/appRoutes";

import { myCertificates } from "./data";

const CertificatesPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("student");

  return (
    <Box component="section" py={7}>
      <Container>
        <CardList
          items={myCertificates}
          renderCard={(props) => (
            <CertificateCard
              image={props.image}
              title={props.title}
              href={`${AppRoutes.student.certificates}/${props.id}`}
            />
          )}
          textForEmptyArray={t("dashboard.no-cetrificates")}
        />
      </Container>
    </Box>
  );
};

export default CertificatesPage;
