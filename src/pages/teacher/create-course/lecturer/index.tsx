import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { ImageUpload } from "src/shared/ui";
import { PageProps } from "pages/type";
import { LecturerForm } from "src/widgets/forms";
import withUserImageUpload from "src/shared/hocs/withUserImageUpload";

export type LectureFormFields = {
  username: string;
  tags?: string[];
};

const LecturerPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("teacher-create-course");

  const WithUserImageUpload = withUserImageUpload(ImageUpload);

  return (
    <Stack gap="16px" className="create-course-lecturer">
      <Box maxWidth="400px" mx="auto">
        <WithUserImageUpload
          centeredContent={true}
          viewType="avatar"
          buttonText={t("lecturer.image-upload-button-text")}
          title={t("lecturer.image-upload-title")}
        />
      </Box>
      <LecturerForm />
    </Stack>
  );
};

export default LecturerPage;
