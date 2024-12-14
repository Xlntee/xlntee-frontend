import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container } from "@mui/material";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import { ImageUpload } from "src/shared/ui";
import { TeacherProfileForm } from "src/widgets/forms";
import withUserImageUpload from "src/hocs/withUserImageUpload";

const ProfilePage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const { t } = useTranslation("common");

  const WithUserImageUpload = withUserImageUpload(ImageUpload);

  return (
    <Box component="section" py="40px">
      <Container>
        <Box maxWidth="800px" marginInline="auto">
          <Box maxWidth={{ xs: "100px", md: "140px" }} marginInline="auto" mb="20px">
            <WithUserImageUpload viewType="avatar" buttonText={t("upload-button")} />
          </Box>
          <TeacherProfileForm />
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
