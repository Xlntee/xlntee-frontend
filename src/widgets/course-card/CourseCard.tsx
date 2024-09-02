import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

import { XlnteeColors } from "src/shared/themes/colors";
import { CourseStatus } from "src/shared/config/CourseStatus";

import "./CourseCard.scss";

interface CourseCardProps {
  title: string;
  updateTime?: string;
  status?: string;
  imageSrc?: string;
  onDelete: () => void;
  onEdit: () => void;
  onRestore: () => void;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  updateTime,
  status = CourseStatus.DRAFT,
  imageSrc,
  onDelete,
  onEdit,
  onRestore,
}) => {
  const { t } = useTranslation("teacher-courses");
  const theme = useTheme();

  return (
    <Box className="course-card">
      <Box className="course-card__image-section">
        <Box bgcolor={imageSrc ? "transparent" : XlnteeColors.LightElementColor} className="course-card__image-inner">
          {imageSrc && <img src={imageSrc} className="course-card__image" />}
        </Box>
        {updateTime && (
          <Typography variant="body2" className="course-card__update-time">
            {t("courses-update-time")} {updateTime}
          </Typography>
        )}
        {status && (
          <Typography variant="body2" className="course-card__status">
            {t(`status.${status}`)}
          </Typography>
        )}
      </Box>
      <Box pt="4px" pb="10px">
        <Typography variant="subtitle1" className="course-card__title">
          {title}
        </Typography>
      </Box>
      <Box className="course-card__overlay">
        {status === CourseStatus.DELETED ? (
          <Button
            onClick={onRestore}
            variant="text"
            size="medium"
            sx={{ fontWeight: 400, color: theme.palette.primary.contrastText }}
            startIcon={<RestoreFromTrashIcon />}
          >
            {t("courses-restore-btn")}
          </Button>
        ) : (
          <Stack spacing={1}>
            <Button
              onClick={onEdit}
              variant="text"
              size="medium"
              sx={{ fontWeight: 400, color: theme.palette.primary.contrastText }}
              startIcon={<EditIcon />}
            >
              {t("courses-toDashboard-btn")}
            </Button>
            <Button
              onClick={onDelete}
              variant="text"
              size="medium"
              sx={{ fontWeight: 400, color: theme.palette.primary.contrastText }}
              startIcon={<DeleteOutlineIcon />}
            >
              {t("courses-delete-btn")}
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default CourseCard;
