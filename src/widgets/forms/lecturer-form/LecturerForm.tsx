import { FC, useRef } from "react";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, FormLabel, Button } from "@mui/material";

import { AutocompleteField, TextField } from "src/features/form-fields";
import { RootForm } from "src/widgets/forms";

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
      <Box className="field-box">
        <Typography variant="h5" className="field-box__title">
          {t("lecturer.fullname-field-label")}
        </Typography>
        <Typography className="field-box__subtitle">{t("lecturer.fullname-field-description")}</Typography>
        <TextField
          name="username"
          variant="outlined"
          fullWidth
          placeholder={`${t("lecturer.fullname-field-placeholder")}...`}
        />
      </Box>
      <Box className="field-box">
        <FormLabel>
          <Typography className="field-box__title">{t("lecturer.skills-field-label")}*</Typography>
          <Typography className="field-box__subtitle">{t("lecturer.skills-field-description")}</Typography>
          <AutocompleteField name="tags" placeholder={`${t("lecturer.skills-field-placeholder")}...`} />
        </FormLabel>
      </Box>
      <Box className="field-box">
        <Typography className="field-box__title">{t("lecturer.about-field-label")}</Typography>
        <Typography className="field-box__subtitle">{t("lecturer.about-field-description")}</Typography>
        <ReactQuill ref={refRichText} theme="snow" />
      </Box>
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
        <Button type="submit" variant="black-contain" size="medium" sx={{ minWidth: "190px" }}>
          {tCommon("button-save")}
        </Button>
        <Button variant="black-text" size="medium">
          {tCommon("button-discard-changes")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default LecturerForm;
