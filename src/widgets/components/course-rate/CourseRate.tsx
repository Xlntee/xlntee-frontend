import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Button, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { DialogModal } from "src/features";

import useDialogModal from "src/hooks/useDialogModal";

import { ReviewRate } from "src/features/review-rate";

import "./CourseRate.scss";

const CourseRate: FC = () => {
  const { t } = useTranslation("auth");

  const { openModal, onOpenModal, onCloseModal } = useDialogModal();

  function onSubmitReview(comment: string, rating: number | null): void {
    console.log(comment, rating);
    onCloseModal();
  }

  return (
    <Box className="course-share">
      <Button
        startIcon={<StarIcon />}
        variant="black-text"
        className="course-share__toggler"
        onClick={() => onOpenModal()}
      >
        <Typography variant="caption">{t("rate")}</Typography>
      </Button>

      <DialogModal
        open={openModal}
        handleAgree={() => console.log(1)}
        handleClose={onCloseModal}
        showCloseButtonIcon
        size="large"
      >
        <ReviewRate onSubmit={onSubmitReview} />
      </DialogModal>
    </Box>
  );
};

export default CourseRate;
