import { FC, useRef } from "react";
import ReactQuill from "react-quill";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Typography, TextField, Stack, FormLabel, Autocomplete, Chip, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { ImageUpload } from "src/features";
import { PageProps } from "pages/type";

import { useValidationSchema } from "./validation";
import { defaultValuesForm } from "./initialData";

export type LectureFormFields = {
  username: string;
  tags?: string[];
};

const LecturerPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const refRichText = useRef<ReactQuill | null>(null);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm<LectureFormFields>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(useValidationSchema())
  });

  function onSubmitForm(data: LectureFormFields): void {
    const description = refRichText.current?.value;
    console.log({
      ...data,
      description
    });
  }

  return (
    <Stack gap="16px" className="create-course-lecturer">
      <Box maxWidth="400px" mx="auto">
        <ImageUpload
          showPreview={true}
          centeredContent={true}
          viewType="avatar"
          buttonText={t("lecturer.image-upload-button-text")}
          title={t("lecturer.image-upload-title")}
        />
      </Box>
      <Box className="field-box">
        <Typography variant="h5" className="field-box__title">
          {t("lecturer.fullname-field-label")}
        </Typography>
        <Typography className="field-box__subtitle">{t("lecturer.fullname-field-description")}</Typography>
        <TextField
          {...register("username")}
          error={!!errors.username?.message}
          helperText={errors.username?.message}
          variant="outlined"
          fullWidth
          placeholder={`${t("lecturer.fullname-field-placeholder")}...`}
        />
      </Box>
      <Box className="field-box">
        <FormLabel>
          <Typography className="field-box__title">{t("lecturer.skills-field-label")}*</Typography>
          <Typography className="field-box__subtitle">{t("lecturer.skills-field-description")}</Typography>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <>
                <Autocomplete
                  {...register("tags")}
                  multiple
                  freeSolo
                  options={[]}
                  value={field.value}
                  clearIcon={false}
                  onChange={(_, newValue) => field.onChange(newValue)}
                  renderTags={(value, props) =>
                    // eslint-disable-next-line react/jsx-key
                    value.map((option, index) => <Chip label={option} {...props({ index })} />)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!errors.tags?.message}
                      helperText={errors.tags?.message}
                      variant="outlined"
                      placeholder={`${t("lecturer.skills-field-placeholder")}...`}
                    />
                  )}
                />
              </>
            )}
          />
        </FormLabel>
      </Box>
      <Box className="field-box">
        <Typography className="field-box__title">{t("lecturer.about-field-label")}</Typography>
        <Typography className="field-box__subtitle">{t("lecturer.about-field-description")}</Typography>
        <ReactQuill ref={refRichText} theme="snow" />
      </Box>
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
        <Button variant="black-contain" size="medium" sx={{ minWidth: "190px" }} onClick={handleSubmit(onSubmitForm)}>
          {tCommon("button-save")}
        </Button>
        <Button variant="black-text" size="medium">
          {tCommon("button-discard-changes")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default LecturerPage;
