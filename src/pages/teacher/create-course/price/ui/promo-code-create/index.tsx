import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Button, InputLabel } from "@mui/material";

import { TextField } from "src/features/form-fields";

import "./PromoCodeCreate.scss";

export type PromoCodeCreateFormFields = {
  discount: string;
  promoCode: string;
};

type PromoCodeCreateProps = {
  onSubmit: (data: PromoCodeCreateFormFields) => void;
};

const PromoCodeCreate: FC<PromoCodeCreateProps> = ({ onSubmit }) => {
  const { t } = useTranslation("teacher-create-course");

  const { trigger, getValues } = useFormContext();

  async function onHandleSubmit(): Promise<void> {
    const isValidate = await trigger(["discount", "promoCode"]);
    if (!isValidate) return;

    const { discount, promoCode } = getValues();
    onSubmit({
      discount: discount,
      promoCode: promoCode
    });
  }

  return (
    <Box className="promo-code-create">
      <Box className="promo-code-create__field">
        <InputLabel shrink={false} htmlFor="discount-field">
          {t("price.promo-field-discount-label")} (%)
        </InputLabel>
        <TextField
          id="discount"
          name="discount"
          type="number"
          fullWidth
          variant="outlined"
          size="small"
          placeholder="(%)"
          showErrorMessage={false}
        />
      </Box>
      <Box className="promo-code-create__field">
        <InputLabel shrink={false} htmlFor="promo-code-field">
          {t("price.promo-field-code-label")}
        </InputLabel>
        <TextField
          id="promoCode"
          name="promoCode"
          fullWidth
          variant="outlined"
          size="small"
          placeholder={`${t("price.promo-field-code-placeholder")}`}
          showErrorMessage={false}
        />
      </Box>
      <Button variant="outlined" size="medium" sx={{ minWidth: "156px", fontWeight: 400 }} onClick={onHandleSubmit}>
        {t("price.promo-button-create")}
      </Button>
    </Box>
  );
};

export default PromoCodeCreate;
