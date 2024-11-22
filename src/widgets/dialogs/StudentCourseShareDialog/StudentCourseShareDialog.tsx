import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button, Box, Typography, TextField, InputAdornment } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { MenuToggler } from "src/features";
import useDialog from "src/hooks/useDialog";

const StudentCourseShareDialog: FC = () => {
  const { t } = useTranslation("student");
  const { onCloseDialogByName } = useDialog();

  const [fieldValue, setFieldValue] = useState<string>("");

  function onCopyToClipboard(): void {
    if (!fieldValue.length) return;
    navigator.clipboard.writeText(fieldValue);
  }

  function onCloseDialog(): void {
    onCloseDialogByName("STUDENT_COURSE_SHARE_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <Stack className="review-rate" gap="20px" alignItems="center">
        <Typography variant="h4" fontWeight={300}>
          {t("share.title")}
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
    </Box>
  );
};

export default StudentCourseShareDialog;
