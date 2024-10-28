import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button, Box, Typography, TextField, InputAdornment } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import useDialogModal from "src/hooks/useDialogModal";
import { DialogModal } from "src/features";

import "./CourseShare.scss";

const CourseShare: FC = () => {
  const { t } = useTranslation("auth");
  const { t: studentT } = useTranslation("student");

  const [fieldValue, setFieldValue] = useState<string>("");
  const { openModal, onOpenModal, onCloseModal } = useDialogModal();

  function onCopyToClipboard(): void {
    if (!fieldValue.length) return;
    navigator.clipboard.writeText(fieldValue);
  }

  return (
    <Box className="course-share">
      <Button
        startIcon={<ShareIcon />}
        variant="black-text"
        className="course-share__toggler"
        onClick={() => onOpenModal()}
      >
        <Typography variant="caption" textAlign="center">
          {t("share")}
        </Typography>
      </Button>
      <DialogModal
        open={openModal}
        handleAgree={() => console.log(1)}
        handleClose={onCloseModal}
        showCloseButtonIcon
        size="large"
      >
        <Stack className="review-rate" gap="20px" alignItems="center">
          <Typography variant="h4" fontWeight={300}>
            {studentT("share.title")}
          </Typography>
          <TextField
            variant="outlined"
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
          <Stack gap="14px" flexDirection="row">
            <Button variant="black-text" aria-label="telegram link">
              <img src="/assets/telegram.svg" alt="telegram icon" width={28} height={28} />
            </Button>
            <Button variant="black-text" aria-label="twitter link">
              <TwitterIcon sx={{ fontSize: "28px" }} />
            </Button>
            <Button variant="black-text" aria-label="messenger link">
              <img src="/assets/messenger.svg" alt="messenger icon" width={28} height={28} />
            </Button>
            <Button variant="black-text" aria-label="instagram link">
              <InstagramIcon sx={{ fontSize: "28px" }} />
            </Button>
          </Stack>
          <Box marginInline="auto" textAlign="center" maxWidth={{ xs: "140px", md: "280px", lg: "370px" }}>
            <img src="/assets/share.webp" alt="share" width="100%" />
          </Box>
        </Stack>
      </DialogModal>
    </Box>
  );
};

export default CourseShare;
