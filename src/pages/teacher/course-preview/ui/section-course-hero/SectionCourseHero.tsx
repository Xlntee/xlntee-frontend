import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Container, IconButton, Grid, Stack, TextField, Typography } from "@mui/material";

import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Rating } from "src/shared/ui";
import { DifficultyType, LanguageType } from "src/entities/course/model";

import "./SectionCourseHero.scss";

type SectionCourseHeroProps = {
  preview: string;
  nickname: string;
  title: string;
  description: string;
  rating?: number;
  price: number;
  discount: number;
  level: DifficultyType;
  language: LanguageType;
  generateCertificate: boolean;
  reviewCount?: number;
};

const getNumberWithDiscount = (number: number, discout: number): number => Math.round(number * (discout / 100));

const SectionCourseHero: FC<SectionCourseHeroProps> = ({
  preview,
  nickname,
  title,
  description,
  rating,
  price,
  discount,
  level,
  language,
  generateCertificate,
  reviewCount
}) => {
  const { t } = useTranslation("teacher-preview");

  const info = [
    {
      icon: <UpdateOutlinedIcon />,
      text: "10.10.2020"
    },
    {
      icon: <LanguageOutlinedIcon />,
      text: language
    },
    {
      icon: <EqualizerIcon />,
      text: level
    },
    {
      icon: <WatchLaterOutlinedIcon />,
      text: "75 годин"
    },
    {
      icon: <LocalActivityIcon />,
      text: generateCertificate ? "Видається сертифікат" : "Сертифікат не видається"
    }
  ] as const;

  return (
    <Box component="section" className="section-course-hero" py="50px">
      <Container>
        <Grid container spacing="30px">
          <Grid item xs={12} lg={6}>
            <Box className="preview-course-image">
              <img src={preview} alt={title} />
              <Button className="preview-course-image__action" startIcon={<PlayArrowIcon />} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box position="relative">
              <Box className="section-course-hero__tools">
                <Box>
                  <Box className="discount discount--large">-{discount}%</Box>
                </Box>
                <IconButton aria-label="add to favorite">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
              <Stack direction="column" gap="10px">
                <Typography maxWidth={{ lg: "80%" }}>
                  {t("section-course-hero.creator")}
                  &nbsp;
                  {nickname}
                </Typography>
                <Typography variant="h4" fontWeight={400} maxWidth={{ lg: "80%" }}>
                  {title}
                </Typography>
                <Typography fontWeight={300} maxWidth={{ lg: "80%" }}>
                  {description}
                </Typography>
                {rating && <Rating readOnly value={rating} reviewCount={reviewCount} size="medium" />}
                <Stack direction="row" alignItems="center" flexWrap="wrap" gap="20px">
                  <Stack direction="row" gap="14px">
                    {discount ? (
                      <>
                        <Typography className="section-course-hero__price">
                          ${getNumberWithDiscount(price, discount)}
                        </Typography>
                        <Typography
                          className="section-course-hero__price section-course-hero__price--old"
                          component="s"
                        >
                          {price}
                        </Typography>
                      </>
                    ) : (
                      <Typography className="section-course-hero__price">{price}</Typography>
                    )}
                  </Stack>
                  <Stack direction="row" gap="12px">
                    <Button variant="dark-outline" className="button-rounded-xl">
                      {t("section-course-hero.actionViewCourse")}
                    </Button>
                    <Button variant="contained" color="primary" className="button-rounded-xl">
                      {t("section-course-hero.actionBuyCourse")}
                    </Button>
                  </Stack>
                </Stack>
                <TextField placeholder="Введіть промокод" fullWidth />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="course-details-info">
              {info.map((item, index) => (
                <Stack key={index} direction="row" gap="10px" alignItems="center">
                  {item.icon}
                  <Typography fontWeight={300} textTransform="capitalize">
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionCourseHero;
