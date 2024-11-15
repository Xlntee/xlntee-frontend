import { FC, useEffect, useState } from "react";
import yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Stack,
  FormLabel,
  Select,
  MenuItem,
  Grid,
  Autocomplete,
  Chip,
  Button,
  FormHelperText
} from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import validationSchema from "./validation";
import { defaultValuesForm } from "./initialData";
import { Difficulty, Language } from "src/entities/course/model";

type SelectType = "category" | "level" | "subcategory" | "language";

export interface SelectFieldBoxProps {
  title: string;
  value: SelectType;
  options: {
    title: string;
    value: string;
  }[];
}

export type FormValues = yup.InferType<typeof validationSchema>;

const GeneralPage: FC<PageProps> = ({ title }) => {
  const { t } = useTranslation("teacher-create-course");

  useTitle(title);

  const [selectFields, setSelectFields] = useState<SelectFieldBoxProps[]>([]);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    setSelectFields(data);
  }, []);

  function onSubmitForm(data: FormValues): void {
    console.log(data);
  }

  const data: SelectFieldBoxProps[] = [
    {
      title: `${t("general.select_field_label")}*`,
      value: "category",
      options: [
        {
          title: "category 1",
          value: "category_1"
        },
        {
          title: "category 2",
          value: "category_2"
        },
        {
          title: "category 3",
          value: "category_3"
        }
      ]
    },
    {
      title: `${t("general.select_field_level")}*`,
      value: "level",
      options: [
        {
          title: Difficulty.all,
          value: Difficulty.all
        },
        {
          title: Difficulty.easy,
          value: Difficulty.easy
        },
        {
          title: Difficulty.middle,
          value: Difficulty.middle
        },
        {
          title: Difficulty.expert,
          value: Difficulty.expert
        }
      ]
    },
    {
      title: `${t("general.select_field_subcategory")}*`,
      value: "subcategory",
      options: [
        {
          title: "subcategory 1",
          value: "subcategory_1"
        },
        {
          title: "subcategory 2",
          value: "subcategory_2"
        },
        {
          title: "subcategory 3",
          value: "subcategory_3"
        }
      ]
    },
    {
      title: `${t("general.select_field_language")}*`,
      value: "language",
      options: [
        {
          title: Language.english,
          value: Language.english
        },
        {
          title: Language.ukrainian,
          value: Language.ukrainian
        }
      ]
    }
  ];

  return (
    <Box className="create-course-general">
      <Box className="field-box">
        <Typography variant="h5" className="field-box__title">
          {t("general.title_field_label")}*
        </Typography>
        <Typography className="field-box__subtitle">{t("general.title_field_description")}</Typography>
        <TextField
          {...register("title")}
          error={!!errors["title"]?.message}
          helperText={errors["title"]?.message}
          variant="outlined"
          fullWidth
          placeholder={`${t("general.title_field_placeholder")}...`}
        />
      </Box>
      <Box className="field-box">
        <Typography variant="h5" className="field-box__title">
          {t("general.description_field_label")}*
        </Typography>
        <Typography className="field-box__subtitle">{t("general.description_field_description")}</Typography>
        <TextField
          {...register("description")}
          error={!!errors["description"]?.message}
          helperText={errors["description"]?.message}
          variant="outlined"
          fullWidth
          placeholder={`${t("general.description_field_placeholder")}...`}
        />
      </Box>
      <Box className="field-box">
        <FormLabel>
          <Stack direction="row" alignItems="start" gap="10px">
            <Checkbox {...register("certificate")} />
            <Box>
              <Typography className="field-box__title">{t("general.checkbox_label")}</Typography>
              <Typography className="field-box__subtitle">{t("general.checkbox_description")}</Typography>
            </Box>
          </Stack>
        </FormLabel>
      </Box>
      <Grid container columnSpacing={{ xs: "20px", md: "30px", xl: "50px" }}>
        {selectFields.length
          ? selectFields.map((item) => (
              <Grid key={item.value} item xs={12} sm={6}>
                <Box className="field-box">
                  <Typography variant="h5" mb="8px" className="field-box__title">
                    {title}
                  </Typography>
                  <Controller
                    name={item.value}
                    control={control}
                    render={({ field }) => (
                      <Select {...field} error={!!errors[item.value]?.message}>
                        {item.options.length
                          ? item.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.title}
                              </MenuItem>
                            ))
                          : null}
                      </Select>
                    )}
                  />
                  {errors[item.value]?.message && (
                    <FormHelperText error={true}>{errors[item.value]?.message}</FormHelperText>
                  )}
                </Box>
              </Grid>
            ))
          : null}
        <Grid item xs={12} sm={6}>
          <Box className="field-box">
            <FormLabel>
              <Typography mb="8px" className="field-box__title">
                {t("general.tags_field_label")}*
              </Typography>
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
                          placeholder={`${t("general.tags_field_placeholder")}...`}
                        />
                      )}
                    />
                  </>
                )}
              />
            </FormLabel>
          </Box>
        </Grid>
      </Grid>
      <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
        <Button variant="black-contain" size="medium" sx={{ minWidth: "190px" }} onClick={handleSubmit(onSubmitForm)}>
          {t("button_save")}
        </Button>
        <Button variant="black-text" size="medium">
          {t("button_discard_changes")}
        </Button>
      </Stack>
    </Box>
  );
};

export default GeneralPage;
