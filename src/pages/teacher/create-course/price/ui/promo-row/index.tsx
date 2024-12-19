import { FC } from "react";

import { Box, Button, TextField as MuiTextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./PromoRow.scss";

type PromoRowProps = {
  id: string;
  discount: string;
  promoCode: string;
  onRemove: (id: string) => void;
};

const PromoRow: FC<PromoRowProps> = ({ id, discount, promoCode, onRemove }) => {
  return (
    <Box className="promo-row" mb="20px">
      <MuiTextField fullWidth variant="outlined" size="small" placeholder="(%)" value={discount} disabled />
      <MuiTextField fullWidth variant="outlined" size="small" placeholder="Code name" value={promoCode} disabled />
      <Button variant="black-text" size="medium" onClick={() => onRemove(id)}>
        <DeleteOutlineIcon />
      </Button>
    </Box>
  );
};

export default PromoRow;
