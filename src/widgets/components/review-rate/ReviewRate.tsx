import { FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import { Rating } from "src/features";

interface ReviewRateProps {
  onSubmit: (comment: string, rating: number | null) => void;
}

const ReviewRate: FC<ReviewRateProps> = ({ onSubmit }) => {
  const { t: studentT } = useTranslation("student");

  const [rating, setRating] = useState<number | null>(null);
  const refComment = useRef<HTMLInputElement>(null);

  function onSubmitForm(): void {
    let commentText: string = "";

    if (refComment.current) {
      console.log(refComment.current);
      commentText = refComment.current?.value;
    }

    onSubmit(commentText, rating);
  }

  return (
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
        <Button variant="black-contain" size="large" sx={{ minWidth: "188px" }} onClick={onSubmitForm}>
          {studentT("review.submit")}
        </Button>
      </Box>
    </Stack>
  );
};

export default ReviewRate;
