import { useState } from "react";
import ReactQuill from "react-quill";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import {
  Box,
  Typography,
  TextField,
  Stack,
  FormLabel,
  Grid,
  Autocomplete,
  Chip,
  Button,
  FormHelperText,
} from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { ImageUpload, VideoUpload } from "src/features";

import { ListRequirements } from "./ui";
import { landingValidationSchema, LandingFormValues } from "./validation";
import { defaultValuesForm } from "./initialData";

type TagType = "subjects" | "requirements";

export interface AutocompleteFieldBoxProps {
  title: string;
  subtitle: string;
  tags: string[];
  value: TagType;
}

const LandingPage = ({ title }: PageProps) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<LandingFormValues>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(landingValidationSchema),
  });

  function onSubmitForm(data: LandingFormValues) {
    console.log(data);
  }

  const fields: AutocompleteFieldBoxProps[] = [
    {
      title: `${t("landing.subjects_field_label")}`,
      subtitle: `${t("landing.subjects_field_description")}`,
      tags: [],
      value: "subjects",
    },
    {
      title: `${t("landing.requirements_field_label")}`,
      subtitle: `${t("landing.requirements_field_description")}`,
      tags: [],
      value: "requirements",
    },
  ];

  function onBlurRichText(richText: string) {
    setValue("description", richText);
  }

  function onUploadImage(file: File, fileBlob?: string) {
    if (fileBlob) {
      setValue("image", file.name);
      setPreviewImage(fileBlob);
    }
  }

  function onUploadVideo(file: File, fileBlob?: string) {
    if (fileBlob) {
      setValue("video", file.name);
      setPreviewVideo(fileBlob);
    }
  }

  const videoRequirements: { title: string; value: string }[] = t("landing.promo_video_requirements", {
    returnObjects: true,
  });
  const imageRequirements: { title: string; value: string }[] = t("landing.promo_image_requirements", {
    returnObjects: true,
  });

  return (
    <Box className="create-course-landing">
      <Stack gap="16px">
        {fields.map(({ title, subtitle, tags, value }) => (
          <Box key={value} className="field-box">
            <FormLabel>
              <Typography className="field-box__title">{title}*</Typography>
              <Typography className="field-box__subtitle">{subtitle}</Typography>
              <Controller
                name={value}
                control={control}
                render={({ field }) => (
                  <>
                    <Autocomplete
                      {...register(value)}
                      multiple
                      freeSolo
                      options={tags}
                      value={field.value}
                      clearIcon={false}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      renderTags={(value, props) =>
                        value.map((option, index) => <Chip label={option} {...props({ index })} />)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={!!errors[value]?.message}
                          helperText={errors[value]?.message}
                          variant="outlined"
                          placeholder={`${t("landing.autocomplete_field_placeholder")}...`}
                        />
                      )}
                    />
                  </>
                )}
              />
            </FormLabel>
          </Box>
        ))}
        <Box className="field-box">
          <Typography className="field-box__title">{t("landing.describe-course_field_label")}*</Typography>
          <Typography className="field-box__subtitle">{t("landing.describe-course_field_description")}</Typography>
          <Box>
            <ReactQuill onBlur={(_val1, _val2, data) => onBlurRichText(data.getHTML())} theme="snow" />
            {errors.description?.message && <FormHelperText error={true}>{errors.description?.message}</FormHelperText>}
          </Box>
        </Box>
      </Stack>
      <Stack gap="24px">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box className="field-box">
              <Typography className="field-box__title">{t("landing.promo_video_label")}*</Typography>
              <Typography className="field-box__subtitle">{t("landing.promo_video_description")}</Typography>
              {typeof videoRequirements === "object" && videoRequirements.length && (
                <Box mb="10px">
                  <ListRequirements items={videoRequirements} />
                </Box>
              )}
              <VideoUpload
                showPreview={false}
                buttonText={`${t("landing.promo_button_text")}`}
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
              <Typography className="field-box__title">{t("landing.promo_image_label")}*</Typography>
              <Typography className="field-box__subtitle">{t("landing.promo_image_description")}</Typography>
              {typeof imageRequirements === "object" && imageRequirements.length && (
                <Box mb="10px">
                  <ListRequirements items={imageRequirements} />
                </Box>
              )}
              <ImageUpload
                viewType="wide"
                showPreview={false}
                buttonText={`${t("landing.promo_button_text")}`}
                onChange={(file, fileBlob) => onUploadImage(file as File, fileBlob)}
              />
            </Box>
            {errors.image?.message && <FormHelperText error={true}>{errors.image?.message}</FormHelperText>}
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <Box className="preview-box">
              {previewImage && <img src={previewImage} alt="preview image" className="preview-box__file" />}
            </Box>
          </Grid>
        </Grid>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap="20px">
          <Button variant="black-contain" size="large" sx={{ minWidth: "190px" }} onClick={handleSubmit(onSubmitForm)}>
            {t("button_save")}
          </Button>
          <Button variant="black-text" size="large" sx={{ minWidth: "190px" }}>
            {t("button_discard_changes")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LandingPage;
