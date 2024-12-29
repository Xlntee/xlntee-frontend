import { FC, useState } from "react";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, FormLabel, Grid, Button, FormHelperText } from "@mui/material";

import { ImageUpload, ListRequirements, VideoUpload, RootForm, AutocompleteField } from "src/shared/ui";

import { useValidationSchema } from "./validation";
import { defaultValuesForm } from "./initialData";

import "./LandingForm.scss";

type TagType = "subjects" | "requirements";

export type LandingFormFields = {
  subjects?: string[];
  requirements?: string[];
  description: string;
  image: string;
  video: string;
};

export type AutocompleteFieldBoxProps = {
  title: string;
  subtitle: string;
  tags: string[];
  value: TagType;
};

type ImageType = {
  title: string;
  value: string;
};

const LandingForm: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const methods = useForm<LandingFormFields>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(useValidationSchema())
  });
  const {
    setValue,
    formState: { errors }
  } = methods;

  function onSubmit(data: LandingFormFields): void {
    console.log(data);
  }

  const fields: AutocompleteFieldBoxProps[] = [
    {
      title: `${t("landing.subjects-field-label")}`,
      subtitle: `${t("landing.subjects-field-description")}`,
      tags: [],
      value: "subjects"
    },
    {
      title: `${t("landing.requirements-field-label")}`,
      subtitle: `${t("landing.requirements-field-description")}`,
      tags: [],
      value: "requirements"
    }
  ];

  function onBlurRichText(richText: string): void {
    setValue("description", richText);
  }

  function onUploadImage(file: File, fileBlob?: string): void {
    if (fileBlob) {
      setValue("image", file.name);
      setPreviewImage(fileBlob);
    }
  }

  function onUploadVideo(file: File, fileBlob?: string): void {
    if (fileBlob) {
      setValue("video", file.name);
      setPreviewVideo(fileBlob);
    }
  }

  const videoRequirements = t("landing.promo-video-requirements", {
    returnObjects: true
  }) as ImageType[];
  const imageRequirements = t("landing.promo-image-requirements", {
    returnObjects: true
  }) as ImageType[];

  return (
    <RootForm className="landing-form" methods={methods} onSubmit={onSubmit}>
      <Stack gap="20px">
        {fields.map((fieldItem) => (
          <Box key={fieldItem.value} className="field-box">
            <FormLabel>
              <Typography className="field-box__title">{fieldItem.title}*</Typography>
              <Typography className="field-box__subtitle">{fieldItem.subtitle}</Typography>
              <AutocompleteField
                name={fieldItem.value}
                placeholder={`${t("landing.autocomplete-field-placeholder")}...`}
              />
            </FormLabel>
          </Box>
        ))}
        <Box className="field-box">
          <Typography className="field-box__title">{t("landing.describe-course-field-label")}*</Typography>
          <Typography className="field-box__subtitle">{t("landing.describe-course-field-description")}</Typography>
          <Box>
            <ReactQuill onBlur={(_val1, _val2, data) => onBlurRichText(data.getHTML())} theme="snow" />
            {errors.description?.message && <FormHelperText error={true}>{errors.description?.message}</FormHelperText>}
          </Box>
        </Box>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box className="field-box">
              <Typography className="field-box__title">{t("landing.promo-video-label")}*</Typography>
              <Typography className="field-box__subtitle">{t("landing.promo-video-description")}</Typography>
              {typeof videoRequirements === "object" && videoRequirements.length && (
                <Box mb="10px">
                  <ListRequirements items={videoRequirements} />
                </Box>
              )}
              <VideoUpload
                showPreview={false}
                buttonText={`${t("landing.promo-button-text")}`}
                onChange={(file, fileBlob) => onUploadVideo(file as File, fileBlob)}
              />
            </Box>
            {errors.video?.message && <FormHelperText error={true}>{errors.video?.message}</FormHelperText>}
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <Box className="preview-box">
              {previewVideo && <video src={previewVideo} controls className="preview-box__file" />}
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box className="field-box">
              <Typography className="field-box__title">{t("landing.promo-image-label")}*</Typography>
              <Typography className="field-box__subtitle">{t("landing.promo-image-description")}</Typography>
              {typeof imageRequirements === "object" && imageRequirements.length && (
                <Box mb="10px">
                  <ListRequirements items={imageRequirements} />
                </Box>
              )}
              <ImageUpload
                viewType="wide"
                showPreview={false}
                buttonText={`${t("landing.promo-button-text")}`}
                onChange={(file, fileBlob) => onUploadImage(file as File, fileBlob)}
              />
            </Box>
            {errors.image?.message && <FormHelperText error={true}>{errors.image?.message}</FormHelperText>}
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <Box className="preview-box">
              {previewImage && <img src={previewImage} alt="preview" className="preview-box__file" />}
            </Box>
          </Grid>
        </Grid>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
          <Button type="submit" variant="dark-contain" size="medium" sx={{ minWidth: "190px" }}>
            {tCommon("button-save")}
          </Button>
          <Button variant="dark-text" size="medium">
            {tCommon("button-discard-changes")}
          </Button>
        </Stack>
      </Stack>
    </RootForm>
  );
};

export default LandingForm;
