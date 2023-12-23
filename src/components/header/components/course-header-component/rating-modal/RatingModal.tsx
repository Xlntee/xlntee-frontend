import {
  Box,
  Button,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "610px",
  height: "350px",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
};
interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const RatingModal: React.FC<IProps> = ({ isOpen, handleClose }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (
    event: ChangeEvent<{}>,
    newRating: number | null
  ) => {
    if (newRating !== null) {
      setRating(newRating);
    }
  };

  const handleRateCourse = () => {
    console.log(`Оцінка курсу: ${rating}`);
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontFamily: "Inter", fontSize: "30px", fontWeight: 700 }}
          >
            Оцінити курс
          </Typography>
          <Rating
            sx={{ fontSize: "60px" }}
            name="course-rating"
            value={rating}
            onChange={handleRatingChange}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: 400,
            color: "#828282",
          }}
        >
          Поділіться будь ласка вашими враженнями від цього курсу:
        </Typography>
        <TextField
          multiline
          rows={3}
          placeholder="Ваші враження..."
          sx={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: 300,
            width: "100%",
            marginBottom: "20px",
          }}
        />
        <Button
          variant="contained"
          onClick={handleRateCourse}
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "25px",
            fontWeight: 700,
            marginLeft: "auto",
            bgcolor: "#32449C",
            color: "white",
            textTransform: "none",
            padding: "10px 30px",
            width: "fit-content",
          }}
        >
          Оцінити
        </Button>
      </Box>
    </Modal>
  );
};

export default RatingModal;
