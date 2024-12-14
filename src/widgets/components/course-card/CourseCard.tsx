import { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

import { CourseStatus } from "src/shared/config/CourseStatus";

import "./CourseCard.scss";

type CourseCardProps = {
  title: string;
  updateTime?: string;
  status?: string;
  imageSrc?: string;
  className?: string;
  onDelete: () => void;
  onEdit: () => void;
  onRestore: () => void;
};

const CourseCard: FC<CourseCardProps> = ({
  title,
  updateTime,
  status = CourseStatus.draft,
  imageSrc,
  className,
  onDelete,
  onEdit,
  onRestore
}) => {
  const { t } = useTranslation("teacher-courses");
  const theme = useTheme();

  return (
    <Box className={cn("course-card", className)}>
      <Box className="course-card__image-section">
        <Box bgcolor={imageSrc ? "transparent" : theme.palette.grey["100"]} className="course-card__image-inner">
          {imageSrc && <img src={imageSrc} alt={title} className="course-card__image" />}
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
        <Typography className="course-card__title" color="text.secondary">
          {title}
        </Typography>
      </Box>
      <Box className="course-card__overlay">
        {status === CourseStatus.deleted ? (
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
