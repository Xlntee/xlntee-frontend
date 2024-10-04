import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Button, Box, Typography, Modal, Rating, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import StarIcon from "@mui/icons-material/Star";

import { XlnteeColors } from "src/shared/themes/colors";

import "./CourseRate.scss";

interface FormData {
  responseText: string;
  rating: number;
}

const CourseRate = () => {
  const { t } = useTranslation("auth");

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box className="course-rate">
      <Button onClick={handleModalOpen} startIcon={<StarIcon />} variant="black-text" className="course-rate__toggler">
        <Typography variant="caption">{t("rate")}</Typography>
      </Button>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box className="course-rate__modal">
          <Typography variant="h4" alignSelf="flex-start" fontWeight="300">
            Будь ласка оцініть цей курс
          </Typography>
          <Typography variant="h5" fontWeight="300">
            Це допоможе нам тримати якість курсів на висоті, а іншим студентам додасть впевненості у своєму виборі
            курсів
          </Typography>
          <img src="/assets/rating-modal.png" />
          <form className="course-rate__form" onSubmit={handleSubmit(onSubmit)}>
            <Rating
              size="large"
              onChange={(event, newValue: number | null) => {
                if (newValue !== null) {
                  setValue("rating", newValue);
                }
              }}
            />
            <TextField fullWidth placeholder="Написати відгук..." {...register("responseText", { required: true })} />
            <Button type="submit" variant="black-contain">
              Відправити
            </Button>
          </form>
          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: XlnteeColors.BlackElementColor }} onClick={handleModalClose} />
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CourseRate;
