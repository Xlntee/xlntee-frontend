import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1100px",
  height: "700px",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

interface TeacherModalProps {
  open: boolean;
  handleClose: () => void;
}

const TeacherModal: React.FC<TeacherModalProps> = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={{ p: "40px 140px" }}>
            <img width={442} height={324} src="/assets/modal-teacher.png" alt="teacher img" />
            <Typography
              sx={{
                fontFamily: "Noto Sans, sans-serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: "40px",
                mb: "40px",
              }}
            >
              Маєте знання та досвід у своії сфері? Xlntee надає можливість пасивно заробляти за знаннях, створюйте,
              публікуйте, та продавайте свої курси прямісенько на платформі, коммунікуйте зі студентами, генеруйте
              купони та продавайте ще більше курсів.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#643dff",
                fontSize: "25px",
                textTransform: "capitalize",
                borderRadius: "10px",
                p: "10px 20px",
              }}
            >
              + Навчати
            </Button>
          </Stack>
          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: "#c4c4c4" }} onClick={handleClose} />
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TeacherModal;
