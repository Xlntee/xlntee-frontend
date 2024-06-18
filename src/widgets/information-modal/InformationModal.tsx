import { Box, Button, Modal, Typography } from "@mui/material";
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
};

interface InformationModalProps {
  open: boolean;
  handleClose: () => void;
}

const InformationModal: React.FC<InformationModalProps> = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ position: "absolute", left: "5%", top: "5%", display: "flex", alignItems: "center" }}>
            <img src="/assets/x-logo-modal.png" width={40} height={40} alt="logo" />
            <Typography
              sx={{ fontFamily: "Inter", fontWeight: 900, fontSize: "45px", fontStyle: "italic", color: "#643dff" }}
            >
              lntee
            </Typography>
          </Box>
          <Box sx={{ position: "relative", width: "1100px", height: "700px" }}>
            <Box sx={{ position: "absolute", top: "10%", left: "50%", transform: "TranslateX(-50%)" }}>
              <img src="/assets/info-modal-education.png" alt="modal education img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Навчання</Typography>
            </Box>
            <Box sx={{ position: "absolute", top: "20%", left: "60%" }}>
              <img src="/assets/info-modal-create-course.png" alt="modal create course img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Створення курсів</Typography>
            </Box>
            <Box sx={{ position: "absolute", top: "50%", left: "58%" }}>
              <img src="/assets/info-modal-security.png" alt="modal security img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Безпека</Typography>
            </Box>
            <Box sx={{ position: "absolute", bottom: "10%", left: "50%", transform: "TranslateX(-50%)" }}>
              <img src="/assets/info-modal-control.png" alt="modal control img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Контроль</Typography>
            </Box>
            <Box sx={{ position: "absolute", top: "50%", right: "60%" }}>
              <img src="/assets/info-modal-search.png" alt="modal search img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Пошук</Typography>
            </Box>
            <Box sx={{ position: "absolute", top: "25%", right: "65%" }}>
              <img src="/assets/info-modal-certificate.png" alt="modal certificate img" />
              <Typography sx={{ textAlign: "center", fontWeight: 300, fontSize: "24px" }}>Сертифікати</Typography>
            </Box>
          </Box>
          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: "#c4c4c4" }} onClick={handleClose} />
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default InformationModal;
