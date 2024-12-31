import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box, Button, FormLabel, Typography } from "@mui/material";

import { TextField } from "src/shared/ui/form-fields";

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
      <FormLabel className="field-box promo-code-create__field">
        <Typography variant="caption" className="field-box__title" mb="6px" display="block">
          {t("price.promo-field-discount-label")} (%)
        </Typography>
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
      </FormLabel>
      <FormLabel className="field-box promo-code-create__field">
        <Typography variant="caption" className="field-box__title" mb="6px" display="block">
          {t("price.promo-field-code-label")}
        </Typography>
        <TextField
          id="promoCode"
          name="promoCode"
          fullWidth
          variant="outlined"
          size="small"
          placeholder={`${t("price.promo-field-code-placeholder")}`}
          showErrorMessage={false}
        />
      </FormLabel>
      <Button variant="outlined" size="large" sx={{ minWidth: "156px", fontWeight: 400 }} onClick={onHandleSubmit}>
        {t("price.promo-button-create")}
      </Button>
    </Box>
  );
};

export default PromoCodeCreate;
