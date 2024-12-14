import { FC } from "react";
import { Stack, List, Box, ListItem, Typography, useTheme } from "@mui/material";

type CoursePreviewInfoBlockProps = {
  title: string;
  info: string[];
};

const CoursePreviewInfoBlock: FC<CoursePreviewInfoBlockProps> = ({ title, info }) => {
  const theme = useTheme();

  return (
    <Stack
      gap="14px"
      p={{ xs: "20px", md: "26px 32px" }}
      borderRadius="20px"
      border={`1px solid ${theme.palette.grey["300"]}`}
    >
      <Typography variant="h2" fontWeight={400}>
        {title}:
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: 0
        }}
      >
        {info.map((item, index) => (
          <ListItem key={index} sx={{ display: "flex", alignItems: "start", gap: "20px", padding: 0 }}>
            <Box pt="6px" width="20px">
              <img src="/assets/course-preview-arrow.png" width={20} height={20} alt="course" />
            </Box>
            <Typography variant="body1" flex={1}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default CoursePreviewInfoBlock;
