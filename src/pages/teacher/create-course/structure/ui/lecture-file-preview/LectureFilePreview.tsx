import { FC } from "react";

import { Box, TextField, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VideocamIcon from "@mui/icons-material/Videocam";
import DescriptionIcon from "@mui/icons-material/Description";

import "./LectureFilePreview.scss";

type LectureFilePreviewProps = {
  type: "file" | "video";
  value?: string;
  onDelete: () => void;
};

const LectureFilePreview: FC<LectureFilePreviewProps> = ({ type, value, onDelete }) => {
  return (
    <Box className="lecture-file-preview">
      {type === "file" && <DescriptionIcon />}
      {type === "video" && <VideocamIcon />}
      <TextField
        InputProps={{ readOnly: true }}
        variant="outlined"
        fullWidth
        className="text-field-light"
        value={value}
      />
      <Button variant="white-text" size="medium" className="lecture-file-preview__delete-icon" onClick={onDelete}>
        <DeleteOutlineIcon />
      </Button>
    </Box>
  );
};

export default LectureFilePreview;
