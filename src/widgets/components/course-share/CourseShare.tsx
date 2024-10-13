import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Box, Typography, Modal, TextField, Stack, InputAdornment, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Snackbar } from "src/features";
import useSnackbarAlert from "src/hooks/useSnackbarAlert";
import { XlnteeColors } from "src/shared/themes/colors";

import "./CourseShare.scss";

const CourseShare: FC = () => {
  const { t } = useTranslation("auth");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>("");
  const { alertMessage, alertVisible, showAlert, closeAlert, setMessageAlert } = useSnackbarAlert();

  const handleModalOpen = (): void => setIsModalOpen(true);
  const handleModalClose = (): void => setIsModalOpen(false);

  function onCopyToClipboard(): void {
    if (!fieldValue.length) return;

    setMessageAlert("скопійовано");
    navigator.clipboard.writeText(fieldValue);
    showAlert();
  }

  return (
    <Box className="course-share">
      <Button
        onClick={handleModalOpen}
        startIcon={<ShareIcon />}
        variant="black-text"
        className="course-share__toggler"
      >
        <Typography variant="caption">{t("share")}</Typography>
      </Button>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box className="course-share__modal">
          <Typography variant="h4" fontWeight="300">
            Поділитися курсом
          </Typography>
          <TextField
            fullWidth
            onChange={(e) => setFieldValue(e.currentTarget.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="black-text" sx={{ minWidth: "40px" }} onClick={onCopyToClipboard}>
                    <ContentCopyIcon />
                  </Button>
                </InputAdornment>
              )
            }}
          />
          <Stack flexDirection="row" gap="5px">
            <IconButton sx={{ color: XlnteeColors.DarkColor }}>
              <TelegramIcon sx={{ fontSize: "36px" }} />
            </IconButton>
            <IconButton sx={{ color: XlnteeColors.DarkColor }}>
              <TwitterIcon sx={{ fontSize: "36px" }} />
            </IconButton>
            <IconButton sx={{ color: XlnteeColors.DarkColor }}>
              <FacebookIcon sx={{ fontSize: "36px" }} />
            </IconButton>
            <IconButton sx={{ color: XlnteeColors.DarkColor }}>
              <InstagramIcon sx={{ fontSize: "36px" }} />
            </IconButton>
          </Stack>
          <img src="/assets/share-modal.png" alt="course share" />
          <Button sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon fontSize="large" sx={{ color: XlnteeColors.BlackElementColor }} onClick={handleModalClose} />
          </Button>
        </Box>
      </Modal>
      <Snackbar color="success" open={alertVisible} onClose={closeAlert} title={alertMessage} />
    </Box>
  );
};

export default CourseShare;
