import { FC } from "react";

import { Box, TextField, Button, useTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VideocamIcon from "@mui/icons-material/Videocam";
import DescriptionIcon from "@mui/icons-material/Description";

type LectureFilePreviewProps = {
  type: "file" | "video";
  value?: string;
  onDelete: () => void;
};

const LectureFilePreview: FC<LectureFilePreviewProps> = ({ type, value, onDelete }) => {
  const theme = useTheme();

  return (
    <Box display="grid" gap="10px" gridTemplateColumns="24px 1fr 40px">
      {type === "file" && (
        <DescriptionIcon
          sx={{
            color: theme.palette.primary.contrastText
          }}
        />
      )}
      {type === "video" && (
        <VideocamIcon
          sx={{
            color: theme.palette.primary.contrastText
          }}
        />
      )}
      <TextField
        InputProps={{ readOnly: true }}
        variant="outlined"
        fullWidth
        className="text-field-light"
        value={value}
      />
      <Button
        variant="white-text"
        size="medium"
        className="lecture-file-preview__delete-icon"
        sx={{
          minWidth: "40px"
        }}
        onClick={onDelete}
      >
        <DeleteOutlineIcon />
      </Button>
    </Box>
  );
};

export default LectureFilePreview;
