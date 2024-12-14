import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button, Box, Typography, TextField } from "@mui/material";

import { MenuToggler, Rating } from "src/shared/ui";
import useDialog from "src/hooks/useDialog";

const StudentCourseRateDialog: FC = () => {
  const { t } = useTranslation("student");
  const { onCloseDialogByName } = useDialog();

  const [rating, setRating] = useState<number | null>(null);
  const refComment = useRef<HTMLInputElement>(null);

  function onCloseDialog(): void {
    onCloseDialogByName("STUDENT_COURSE_RATE_DIALOG");
  }

  function onSubmit(): void {
    let commentText: string = "";

    if (refComment.current) {
      commentText = refComment.current?.value;
    }
    console.log(commentText, rating);
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <Stack className="review-rate" gap="20px">
        <Box>
          <Typography variant="h4" fontWeight={300}>
            {t("review.title")}
          </Typography>
          <Typography variant="body1" fontWeight={300}>
            {t("review.subtitle")}
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
          placeholder={t("review.field-comment-placeholder")}
          fullWidth
        />
        <Box textAlign="center">
          <Button variant="black-contain" size="large" sx={{ minWidth: "188px" }} onClick={onSubmit}>
            {t("review.submit")}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default StudentCourseRateDialog;
