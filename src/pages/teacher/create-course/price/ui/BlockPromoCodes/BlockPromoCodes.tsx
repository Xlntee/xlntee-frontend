import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

import { Box, Divider, Typography, TextField, Button, InputLabel } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { DialogModal, Snackbar } from "src/features";
import useSnackbarAlert from "src/hooks/useSnackbarAlert";
import useDialogModal from "src/hooks/useDialogModal";

import validationSchema from "./validation";
import { defaultValuesForm } from "./initialData";

import "./BlockPromoCodes.scss";

type PromoCode = {
  id: string;
  discount: number;
  name: string;
};

export type FormValues = yup.InferType<typeof validationSchema>;

const BlockPromoCodes: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { t: dialogModalT } = useTranslation("dialog-modal");

  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const { alertMessage, alertVisible, alertColor, showAlert, closeAlert, setMessageAlert, setColorAlert } =
    useSnackbarAlert();
  const { openModal, selectedId, onOpenModal, onCloseModal } = useDialogModal();

  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors }
  } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(validationSchema)
  });

  function onSubmitForm({ discount, promoCode }: FormValues): void {
    const existsPromo = promoCodes.some((item) => item.name === promoCode);
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
        name: promoCode,
        discount: +discount
      }
    ]);
    resetField("discount");
    resetField("promoCode");
  }

  function onDeletePromoCode(id: string): void {
    const filteredPromoCodes = promoCodes.filter((item) => item.id !== id);
    setPromoCodes(filteredPromoCodes);
    onCloseModal();
  }

  return (
    <Box className="block-promo-codes">
      <Box>
        <Typography variant="h6" mb="8px">
          {t("price.promo-title")}
        </Typography>
        <Divider />
      </Box>
      <Box className="promo-row">
        <Box className="promo-row__field">
          <InputLabel shrink={false} htmlFor="discount-field">
            {t("price.promo-field-discount-label")} (%)
          </InputLabel>
          <TextField
            {...register("discount")}
            error={!!errors.discount?.message}
            fullWidth
            id="discount-field"
            variant="outlined"
            size="small"
            placeholder="(%)"
          />
        </Box>
        <Box className="promo-row__field">
          <InputLabel shrink={false} htmlFor="promo-code-field">
            {t("price.promo-field-code-label")}
          </InputLabel>
          <TextField
            {...register("promoCode")}
            error={!!errors.promoCode?.message}
            fullWidth
            id="promo-code-field"
            variant="outlined"
            size="small"
            placeholder={`${t("price.promo-field-code-placeholder")}`}
          />
        </Box>
        <Button
          variant="outlined"
          size="medium"
          sx={{ minWidth: "156px", fontWeight: 400 }}
          onClick={handleSubmit(onSubmitForm)}
        >
          {t("price.promo-button-create")}
        </Button>
      </Box>
      {promoCodes.length ? (
        <>
          <Box>
            <Typography variant="h6" mb="8px">
              {t("price.promo-created-title")}
            </Typography>
            <Divider />
          </Box>
          <Box>
            <Box className="promo-row">
              <Box className="promo-row__field">
                <Typography className="promo-field__label">{t("price.promo-field-discount-label")} (%)</Typography>
              </Box>
              <Box className="promo-row__field">
                <Typography className="promo-field__label">{t("price.promo-field-code-label")}</Typography>
              </Box>
            </Box>
            {promoCodes.map((promo) => (
              <Box key={promo.id} className="promo-row">
                <TextField
                  fullWidth
                  id={`discount-field-${promo.id}`}
                  variant="outlined"
                  size="small"
                  placeholder="(%)"
                  value={promo.discount}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  id={`promo-code-field-${promo.id}`}
                  variant="outlined"
                  size="small"
                  placeholder="Code name"
                  value={promo.name}
                  InputProps={{ readOnly: true }}
                />
                <Button variant="black-text" size="medium" onClick={() => onOpenModal(promo.id)}>
                  <DeleteOutlineIcon />
                </Button>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <Typography variant="h6">{t("price.promo-created-empty")}</Typography>
      )}
      <Snackbar color={alertColor} open={alertVisible} onClose={closeAlert} title={alertMessage} />
      <DialogModal
        open={openModal}
        showCloseButtonIcon
        title={dialogModalT("dialog_modal_delete_promo_code")}
        primaryButtonText={dialogModalT("dialog_modal_agree")}
        secondaryButtonText={dialogModalT("dialog_modal_disagree")}
        handleAgree={() => selectedId && onDeletePromoCode(selectedId)}
        handleClose={onCloseModal}
      />
    </Box>
  );
};

export default BlockPromoCodes;
