import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import useSnackbarAlert from "src/hooks/useSnackbarAlert";
import { Snackbar } from "src/features";

const AdvertisingPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const [fieldValue, setFieldValue] = useState<string>("");
  const { alertMessage, alertVisible, showAlert, closeAlert, setMessageAlert } = useSnackbarAlert();

  function onCopyToClipboard(): void {
    if (!fieldValue.length) return;

    setMessageAlert(t("advertising.clipboard_message"));
    navigator.clipboard.writeText(fieldValue);
    showAlert();
  }

  return (
    <Box className="create-course-advertising">
      <Box className="field-box">
        <Typography variant="h5" className="field-box__title">
          {t("advertising.course_url_label")}*
        </Typography>
        <Typography className="field-box__subtitle">{t("advertising.course_url_description")}</Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder={`${t("advertising.course_url_placeholder")}...`}
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
      </Box>
      <Snackbar color="success" open={alertVisible} onClose={closeAlert} title={alertMessage} />
    </Box>
  );
};

export default AdvertisingPage;
