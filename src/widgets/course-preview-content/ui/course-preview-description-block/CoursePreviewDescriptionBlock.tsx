import { Box, Typography } from "@mui/material";

interface CoursePreviewDescriptionBlockProps {
  courseDescription: string;
}

const CoursePreviewDescriptionBlock: React.FC<CoursePreviewDescriptionBlockProps> = ({ courseDescription }) => {
  return (
    <Box sx={{ width: "100%", minHeight: "355px", bgcolor: "#333", borderRadius: "20px" }}>
      <Typography
        sx={{ margin: "15px 0 30px 30px", fontFamily: "Inter", fontWeight: 900, fontSize: "34px", color: "#fff" }}
      >
        Опис курсу
      </Typography>
      <Typography
        sx={{
          padding: "0 100px 20px 100px",
          fontFamily: "Noto Sans",
          fontWeight: 400,
          fontSize: "20px",
          color: "#fff",
        }}
      >
        {courseDescription}
      </Typography>
    </Box>
  );
};

export default CoursePreviewDescriptionBlock;
