import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { Box, Typography, Stack, FormLabel, Grid, Button } from "@mui/material";

import useTitle from "src/hooks/useTitle";
import { PageProps } from "pages/type";

import { Difficulty, Language } from "src/entities/course/model";
import { AutocompleteField, CheckboxField, SelectField, TextField } from "src/features/form-fields";

import { useValidationSchema } from "./validation";
import { defaultValuesForm } from "./initialData";
import { RootForm } from "src/widgets/forms";

type SelectType = "category" | "level" | "subcategory" | "language";

export type GeneralFormFields = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  level: string;
  subcategory: string;
  language: string;
  certificate?: boolean | null;
};

export type SelectFieldBoxProps = {
  title: string;
  value: SelectType;
  options: {
    title: string;
    value: string;
  }[];
};

const GeneralPage: FC<PageProps> = ({ title }) => {
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

  useTitle(title);

  const [selectFields, setSelectFields] = useState<SelectFieldBoxProps[]>([]);

  const methods = useForm<GeneralFormFields>({
    mode: "onSubmit",
    defaultValues: defaultValuesForm,
    resolver: yupResolver(useValidationSchema())
  });

  useEffect(() => {
    setSelectFields(data);
  }, []);

  function onSubmit(data: GeneralFormFields): void {
    console.log(data);
  }

  const data: SelectFieldBoxProps[] = [
    {
      title: `${t("general.select-field-label")}*`,
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
      title: `${t("general.select-field-level")}*`,
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
      title: `${t("general.select-field-subcategory")}*`,
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
      title: `${t("general.select-field-language")}*`,
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
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack gap="20px">
        <FormLabel className="field-box">
          <Typography variant="h5" className="field-box__title">
            {t("general.title-field-label")}*
          </Typography>
          <Typography className="field-box__subtitle">{t("general.title-field-description")}</Typography>
          <TextField
            name="title"
            variant="outlined"
            fullWidth
            placeholder={`${t("general.title-field-placeholder")}...`}
          />
        </FormLabel>
        <FormLabel className="field-box">
          <Typography variant="h5" className="field-box__title">
            {t("general.description-field-label")}*
          </Typography>
          <Typography className="field-box__subtitle">{t("general.description-field-description")}</Typography>
          <TextField
            name="description"
            variant="outlined"
            fullWidth
            placeholder={`${t("general.description-field-placeholder")}...`}
          />
        </FormLabel>
        <Box className="field-box">
          <Stack direction="row" alignItems="start">
            <CheckboxField id="certificate" name="certificate" />
            <FormLabel htmlFor="certificate">
              <Typography className="field-box__title">{t("general.checkbox-label")}</Typography>
              <Typography className="field-box__subtitle">{t("general.checkbox-description")}</Typography>
            </FormLabel>
          </Stack>
        </Box>
        <Grid container columnSpacing={{ xs: "20px", md: "30px", xl: "50px" }} rowGap="20px">
          {selectFields.length
            ? selectFields.map((item) => (
                <Grid key={item.value} item xs={12} sm={6}>
                  <FormLabel className="field-box">
                    <Typography variant="h5" mb="8px" className="field-box__title">
                      {item.title}
                    </Typography>
                    <SelectField name={item.value} options={item.options} />
                  </FormLabel>
                </Grid>
              ))
            : null}
          <Grid item xs={12} sm={6}>
            <FormLabel className="field-box">
              <Typography mb="8px" className="field-box__title">
                {t("general.tags-field-label")}*
              </Typography>
              <AutocompleteField
                name="tags"
                placeholder={`${t("general.tags_field_placeholder")}...`}
                onChange={(e) => {
                  console.log("change", e);
                }}
              />
            </FormLabel>
          </Grid>
        </Grid>
        <Stack direction={{ sm: "row" }} flexWrap="wrap" gap={{ sm: "20px", md: "40px" }}>
          <Button type="submit" variant="black-contain" size="medium" sx={{ minWidth: "190px" }}>
            {tCommon("button-save")}
          </Button>
          <Button variant="black-text" size="medium">
            {tCommon("button-discard-changes")}
          </Button>
        </Stack>
      </Stack>
    </RootForm>
  );
};

export default GeneralPage;
