import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { TextField } from "src/shared/ui/form-fields";
import { RootForm } from "src/shared/ui";

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
      <Stack direction="row" justifyContent="flex-end">
        <Button type="submit" endIcon={<ArrowForwardIcon />}>
          {t("help-center.submit-btn")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default HelpCenterForm;
