import { useState } from "react";

import { Stack, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Tools = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function onToggleFavorite() {
    setIsFavorite((prevState) => !prevState);
  }

  return (
    <Stack direction="row" gap="10px" alignItems="center">
      <Button variant="black-text" onClick={onToggleFavorite}>
        {isFavorite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
      </Button>
    </Stack>
  );
};

export default Tools;
