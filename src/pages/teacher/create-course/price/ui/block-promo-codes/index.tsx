import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { Box, Divider, Typography } from "@mui/material";

import { Snackbar } from "src/shared/ui";
import useSnackbarAlert from "src/hooks/useSnackbarAlert";

import PromoCodeCreate, { PromoCodeCreateFormFields } from "../promo-code-create";
import PromoRow from "../promo-row";
import useDialog from "src/hooks/useDialog";

type PromoCode = {
  id: string;
  discount: number;
  promoCode: string;
};

const BlockPromoCodes: FC = () => {
  const { t } = useTranslation("teacher-create-course");

  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const { alertMessage, alertVisible, alertColor, showAlert, closeAlert, setMessageAlert, setColorAlert } =
    useSnackbarAlert();

  const { onOpenDialog } = useDialog();
  const { resetField } = useFormContext();

  function onOpenModal(id: string): void {
    onOpenDialog({
      dialogName: "DELETE_PROMO_CODE_DIALOG",
      options: {
        id: id
      }
    });
  }

  function onSubmit(data: PromoCodeCreateFormFields): void {
    const { discount, promoCode } = data;

    const existsPromo = promoCodes.some((item) => item.promoCode === promoCode);
    if (existsPromo) {
      setColorAlert("error");
      setMessageAlert(t("price.promo-exist"));
      showAlert();
      return;
    }

    setPromoCodes((prevItems) => [
      ...prevItems,
      {
        id: uuidv4().toString(),
        promoCode: promoCode,
        discount: +discount
      }
    ]);

    resetField("discount");
    resetField("promoCode");
  }

  return (
    <Box>
      <Typography variant="h6" mb="8px">
        {t("price.promo-title")}
      </Typography>
      <Divider style={{ marginBottom: "20px" }} />
      <Box mb="20px">
        <PromoCodeCreate onSubmit={onSubmit} />
      </Box>
      {promoCodes.length ? (
        <>
          <Typography variant="h6" mb="8px">
            {t("price.promo-created-title")}
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />
          <Box className="promo-row">
            <Box className="promo-row__field">
              <Typography className="promo-field__label">{t("price.promo-field-discount-label")} (%)</Typography>
            </Box>
            <Box className="promo-row__field">
              <Typography className="promo-field__label">{t("price.promo-field-code-label")}</Typography>
            </Box>
          </Box>
          {promoCodes.map(({ id, discount, promoCode }) => (
            <PromoRow key={id} id={id} discount={discount.toString()} promoCode={promoCode} onRemove={onOpenModal} />
          ))}
        </>
      ) : (
        <Typography variant="h6">{t("price.promo-created-empty")}</Typography>
      )}
      <Snackbar color={alertColor} open={alertVisible} onClose={closeAlert} title={alertMessage} />
    </Box>
  );
};

export default BlockPromoCodes;
