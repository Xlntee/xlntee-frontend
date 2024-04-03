import React, { useState } from "react";
import {
  Box,
  IconButton,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "544px",
  height: "208px",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "5px",
  p: "20px",
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
};

const socialMediaLinks = [
  { icon: <TelegramIcon />, link: "https://web.telegram.org/a/" },
  { icon: <TwitterIcon />, link: "https://twitter.com/home?lang=uk" },
  { icon: <FacebookIcon />, link: "https://www.facebook.com/" },
  { icon: <InstagramIcon />, link: "https://www.instagram.com/" },
];

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ShareModal: React.FC<IProps> = ({ isOpen, handleClose }) => {
  const [inputValue, setInputValue] = useState("https://www.google.com/");

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
  };
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: "25px",
            fontWeight: 700,
            mb: "25px",
          }}
        >
          Поділитись цим курсом
        </Typography>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleCopy}>
                <ContentCopyIcon />
              </IconButton>
            ),
          }}
          sx={{
            mb: 2,
            "& fieldset": {
              borderRadius: "5px",
            },
          }}
        />
        <Box>
          {socialMediaLinks.map((item, index) => (
            <IconButton
              key={index}
              sx={{
                mr: 1,
                "& .MuiSvgIcon-root": {
                  color: "#000",
                },
              }}
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
            </IconButton>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ShareModal;
