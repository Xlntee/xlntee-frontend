import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Typography, Button, Grid } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";

type InfoBlockProps = {
  image: string;
  title: string;
  email: string;
};

const InfoBlock: FC<InfoBlockProps> = ({ image, title, email }) => {
  const { t } = useTranslation("auth");

  return (
    <Grid container spacing={{ md: "40px" }} my={{ md: "40px" }}>
      <Grid item xs={12} md={5} textAlign={{ xs: "center", md: "left" }}>
        <img src={image} alt={title} />
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="h2" fontWeight={300} fontSize={{ xs: "20px", lg: "30px" }} mb={{ xs: "10px" }}>
          {title}
        </Typography>
        <Typography variant="h3" fontWeight={300} fontSize={{ xs: "16px", lg: "20px" }} mb={{ xs: "10px" }}>
          {t("credential-update-content.subtitle", {
            email: email
          })}
        </Typography>
        <Typography
          fontWeight={300}
          maxWidth={{ md: "480px" }}
          fontSize={{ xs: "16px", lg: "18px" }}
          color={XlnteeColors.GrayColor700}
        >
          {t("credential-update-content.check-email")} {""}
          <Button className="button-link">{t("resend-email")}.</Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
