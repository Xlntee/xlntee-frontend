import { FC } from "react";

import { Link } from "react-router-dom";
import { Box, Stack, Button, Typography } from "@mui/material";

import "./RoleCard.scss";

export type RoleCardProps = {
  image: string;
  text: string;
  type: string;
  href: string;
};

const RoleCard: FC<RoleCardProps> = ({ image, text, type, href }) => {
  return (
    <Box className="role-card">
      <Box mb="20px">
        <img src={image} alt={type} />
      </Box>
      <Stack direction="column" gap="20px" maxWidth="300px" marginInline="auto">
        <Typography variant="body2">{text}</Typography>
        <Box>
          <Button
            component={Link}
            to={href}
            variant="outlined"
            sx={{ fontWeight: 400, borderRadius: "60px", gap: "6px" }}
          >
            Log in as a{" "}
            <Box component="span" textTransform="capitalize">
              {type}
            </Box>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default RoleCard;
