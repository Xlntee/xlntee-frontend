import { Box, Stack, Divider, Button, Typography, Select, MenuItem } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./AccountMenu.scss";

const AccountMenu = () => {
  return (
    <Box className="account-menu">
      <Box p="20px">
        <Stack direction="column" alignItems="center" gap="4px">
          <AccountCircleOutlinedIcon className="account-menu__avatar" />
          <Typography variant="h6">@leshalurn</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" alignItems="start" gap="10px" p="20px">
        <Button
          variant="black-outline"
          fullWidth
          startIcon={<SwapHorizIcon fontSize="large" />}
          sx={{ borderRadius: "30px" }}
        >
          User
        </Button>
        <Stack direction="row" alignItems="center" gap="10px" width="100%">
          <LanguageIcon />
          <Select size="small" fullWidth className="language-switcher" value="eng">
            <MenuItem value="eng">English</MenuItem>
            <MenuItem value="ukr">Ukrainian</MenuItem>
          </Select>
        </Stack>
        <Button variant="black-text" className="account-menu__link">
          Центр підтримки
        </Button>
        <Button variant="black-text" className="account-menu__link">
          Вийти
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountMenu;
