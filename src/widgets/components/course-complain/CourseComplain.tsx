import { Button, Box, MenuItem, Menu } from "@mui/material";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./CourseComplain.scss";
import { useState } from "react";
import RefundModal from "./ui/refund-modal/RefungModal";
import ComplainModal from "./ui/complain-modal/ComplainModal";

const CourseRate = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="course-complain">
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        variant="black-text"
        className="course-complain__toggler"
      >
        <NewReleasesOutlinedIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>
          <ComplainModal percentage={24} />
        </MenuItem>
        <MenuItem>
          <RefundModal />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CourseRate;
