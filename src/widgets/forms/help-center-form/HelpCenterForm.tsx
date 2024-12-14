import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { RootForm } from "src/widgets/forms";
import { TextField } from "src/shared/ui/form-fields";

import { useValidationSchema } from "./validation";

import "./HelpCenterForm.scss";

export type HelpCenterFormFields = {
  support: string;
};

type HelpCenterFormProps = {
  onSubmit: (props: HelpCenterFormFields) => void;
};

const HelpCenterForm: FC<HelpCenterFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("auth");

  const methods = useForm<HelpCenterFormFields>({
    resolver: yupResolver(useValidationSchema()),
    mode: "onSubmit"
  });

  function onHandleSubmit(data: HelpCenterFormFields): void {
    onSubmit(data);
  }

  return (
    <RootForm methods={methods} onSubmit={onHandleSubmit} className="help-center-form">
      <TextField
        name="support"
        multiline
        fullWidth
        rows={6}
        className="help-center-form__text-field"
        placeholder={t("help-center.placeholder")}
      />
      <Button type="submit" endIcon={<ArrowForwardIcon />} className="help-center-form__submit-button">
        {t("help-center.submit-btn")}
      </Button>
    </RootForm>
  );
};

export default HelpCenterForm;
