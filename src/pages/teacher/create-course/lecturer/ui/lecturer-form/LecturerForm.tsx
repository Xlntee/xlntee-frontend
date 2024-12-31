import { FC, useRef } from "react";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, FormLabel, Button } from "@mui/material";

import { AutocompleteField, TextField, RootForm } from "src/shared/ui";

import { defaultValuesForm } from "./initialData";
import { useValidationSchema } from "./validation";

export type LectureFormFields = {
  username: string;
  tags?: string[];
};

const LecturerForm: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const refRichText = useRef<ReactQuill | null>(null);

  const methods = useForm<LectureFormFields>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(useValidationSchema())
  });

  function onSubmit(data: LectureFormFields): void {
    const description = refRichText.current?.value;
    console.log({
      ...data,
      description
    });
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack gap="20px">
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("lecturer.fullname-field-label")}</Typography>
          <Typography className="field-box__subtitle">{t("lecturer.fullname-field-description")}</Typography>
          <TextField
            name="username"
            variant="outlined"
            fullWidth
            placeholder={`${t("lecturer.fullname-field-placeholder")}...`}
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography className="field-box__title">{t("lecturer.skills-field-label")}*</Typography>
          <Typography className="field-box__subtitle">{t("lecturer.skills-field-description")}</Typography>
          <AutocompleteField name="tags" placeholder={`${t("lecturer.skills-field-placeholder")}...`} />
        </FormLabel>
        <Box className="field-box">
          <Typography className="field-box__title">{t("lecturer.about-field-label")}</Typography>
          <Typography className="field-box__subtitle">{t("lecturer.about-field-description")}</Typography>
          <ReactQuill ref={refRichText} theme="snow" />
        </Box>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap="20px">
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ minWidth: "150px" }}>
            {tCommon("button-save")}
          </Button>
          <Button variant="dark-text" size="large" disabled>
            {tCommon("button-discard-changes")}
          </Button>
        </Stack>
      </Stack>
    </RootForm>
  );
};

export default LecturerForm;
