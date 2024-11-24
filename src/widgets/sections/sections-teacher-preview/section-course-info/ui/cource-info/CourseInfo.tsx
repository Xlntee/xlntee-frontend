import { FC } from "react";
import { Stack, List, Box, ListItem, Typography } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

type CoursePreviewInfoBlockProps = {
  title: string;
  info: string[];
};

const CoursePreviewInfoBlock: FC<CoursePreviewInfoBlockProps> = ({ title, info }) => {
  return (
    <Stack
      gap="14px"
      p={{ xs: "20px", md: "26px 32px" }}
      borderRadius="20px"
      bgcolor={XlnteeColors.GrayColor800}
      border={`1px solid ${XlnteeColors.GrayColor400}`}
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
