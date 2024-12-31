import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import useSnackbarAlert from "src/shared/hooks/useSnackbarAlert";
import { Snackbar } from "src/shared/ui";

const AdvertisingPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const [fieldValue, setFieldValue] = useState<string>("");
  const { alertMessage, alertVisible, showAlert, closeAlert, setMessageAlert } = useSnackbarAlert();

  function onCopyToClipboard(): void {
    if (!fieldValue.length) return;

    setMessageAlert(t("advertising.clipboard-message"));
    navigator.clipboard.writeText(fieldValue);
    showAlert();
  }

  return (
    <Box className="create-course-advertising">
      <Box className="field-box">
        <Typography className="field-box__title">{t("advertising.course-url-label")}*</Typography>
        <Typography className="field-box__subtitle">{t("advertising.course-url-description")}</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder={`${t("advertising.course-url-placeholder")}...`}
          onChange={(e) => setFieldValue(e.currentTarget.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="dark-text" sx={{ minWidth: "40px" }} onClick={onCopyToClipboard}>
                  <ContentCopyIcon />
                </Button>
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Snackbar color="success" open={alertVisible} onClose={closeAlert} title={alertMessage} />
    </Box>
  );
};

export default AdvertisingPage;
