import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface CoursePreviewInfoBlockProps {
  header: string;
  info: string[];
}

const CoursePreviewInfoBlock: React.FC<CoursePreviewInfoBlockProps> = ({ header, info }) => {
  return (
    <Box
      sx={{
        width: "590px",
        minHeight: "400px",
        bgcolor: "#f9f9f9",
        border: "1px solid #c4c4c4",
        borderRadius: "20px",
        p: "25px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Inter", fontWeight: 900, fontSize: "34px", color: "#000", mb: "20px" }}
      >
        {header}
      </Typography>
      <Stack gap="20px">
        {info.map((info, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "start", gap: "15px" }}>
            <img src="/assets/course-preview-arrow.png" />
            <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px", color: "#000" }}>
              {info}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CoursePreviewInfoBlock;
