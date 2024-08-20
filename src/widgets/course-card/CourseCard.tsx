import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { XlnteeColors } from "src/shared/themes/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { CourseStatus } from "src/shared/config/CourseStatus";
import { useTranslation } from "react-i18next";
import "./CourseCard.scss";

interface CourseCardProps {
  title?: string;
  updateTime?: string;
  status?: string;
  imageSrc?: string;
  onDelete: (course: any) => void;
  onEdit: (course: any) => void;
  onRestore: (course: any) => void;
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
      <Box
        sx={{
          height: 195,
          p: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: imageSrc ? "transparent" : XlnteeColors.LightElementColor,
          }}
        >
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
      <Typography variant="subtitle1" className="course-card__title">
        {title}
      </Typography>
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
