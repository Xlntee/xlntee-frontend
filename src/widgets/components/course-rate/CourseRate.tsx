import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button, Box, Typography, TextField } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { DialogModal, Rating } from "src/features";

import useDialogModal from "src/hooks/useDialogModal";

import "./CourseRate.scss";

const CourseRate: FC = () => {
  const { t } = useTranslation("auth");
  const { t: studentT } = useTranslation("student");

  const [rating, setRating] = useState<number | null>(null);
  const refComment = useRef<HTMLInputElement>(null);
  const { openModal, onOpenModal, onCloseModal } = useDialogModal();

  function onSubmit(): void {
    let commentText: string = "";

    if (refComment.current) {
      commentText = refComment.current?.value;
    }
    console.log(commentText, rating);
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
        <Stack className="review-rate" gap="20px">
          <Box>
            <Typography variant="h4" fontWeight={300}>
              {studentT("review.title")}
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              {studentT("review.subtitle")}
            </Typography>
          </Box>
          <Box marginInline="auto" textAlign="center" maxWidth={{ xs: "140px", md: "200px", lg: "250px" }}>
            <img src="/assets/stars-rating.webp" alt="starts rating" width="100%" />
          </Box>
          <Stack direction="row" justifyContent="center">
            <Rating
              name="rating"
              size="large"
              showRating={false}
              typeIcon="contained"
              value={rating}
              onChange={(_, value) => setRating(value)}
            />
          </Stack>
          <TextField
            inputRef={refComment}
            id="review-comment"
            aria-label="review-comment input"
            type="email"
            placeholder={studentT("review.field-comment-placeholder")}
            fullWidth
          />
          <Box textAlign="center">
            <Button variant="black-contain" size="large" sx={{ minWidth: "188px" }} onClick={onSubmit}>
              {studentT("review.submit")}
            </Button>
          </Box>
        </Stack>
      </DialogModal>
    </Box>
  );
};

export default CourseRate;
