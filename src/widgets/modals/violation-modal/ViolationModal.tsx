import { Box, Button, FormControlLabel, FormGroup, Grid, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import Checkbox from "@mui/material/Checkbox";

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
  p: "54px",
};

interface ViolationModalProps {
  open: boolean;
  handleClose: () => void;
}

const ViolationModal: React.FC<ViolationModalProps> = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h2"
            sx={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 300, fontSize: "34px", mb: "40px" }}
          >
            Повідомити про порушення
          </Typography>
          <TextField placeholder="Пошта користувача або посилання на профіль" fullWidth sx={{ mb: "30px" }} />
          <FormGroup sx={{ mb: "30px" }}>
            <Typography sx={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 400, fontSize: "24px", mb: "5px" }}>
              Причина скарги
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel control={<Checkbox />} label="Спам" />
                <FormControlLabel control={<Checkbox />} label="Копірайтинг/порушення авторських прав" />
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel control={<Checkbox />} label="Абюз / не коректне спілкування" />
                <FormControlLabel control={<Checkbox />} label="Інше" />
              </Grid>
            </Grid>
          </FormGroup>
          <Typography sx={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 400, fontSize: "24px", mb: "10px" }}>
            Опис скарги
          </Typography>
          <TextField multiline fullWidth rows={5} sx={{ mb: "30px" }} />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: "200px",
                height: "70px",
                fontSize: "25px",
                bgcolor: "#643dff",
                borderRadius: "5px",
                textTransform: "capitalize",
              }}
            >
              Відправити
            </Button>
          </Box>
          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: "#c4c4c4" }} onClick={handleClose} />
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ViolationModal;
