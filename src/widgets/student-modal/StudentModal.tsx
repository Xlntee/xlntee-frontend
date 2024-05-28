import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
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

const StudentModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open student modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={{ p: "0 140px" }}>
            <img width={442} height={324} src="/assets/modal-student.png" alt="student img" />
            <Typography
              sx={{
                fontFamily: "Noto Sans, sans-serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: "40px",
                mb: "30px",
              }}
            >
              В пошуках нових знань?
              <br /> На Xlntee ви знайдете знання у більшості напрямках, провірені курси, відкриті відгуки, навчання,
              гарантія повернення коштів та попередній перегляд перед придбанням, ми зробили все аби ви були впевнені у
              мвоєму виборі а навчання було зручним.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#643dff",
                fontSize: "25px",
                fontWeight: 700,
                textTransform: "capitalize",
                borderRadius: "10px",
                p: "10px 20px",
              }}
            >
              Навчатись
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

export default StudentModal;
