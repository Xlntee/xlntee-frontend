import { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import "./CertificateCard.scss";

interface CertificateCardProps {
  image: string;
  title: string;
  href: string;
}

const CertificateCard: FC<CertificateCardProps> = ({ title, image, href }) => {
  return (
    <Box className="cartificate-card">
      <Box className="cartificate-card__image">
        <img src={image} />
      </Box>
      <Box className="cartificate-card__body">
        <Typography variant="body2" className="cartificate-card__title">
          {title}
        </Typography>
      </Box>
      <Link className="cartificate-card__link" to={href}></Link>
    </Box>
  );
};

export default CertificateCard;
