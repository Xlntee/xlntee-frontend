import { FC, useState, MouseEvent } from "react";

import { Button, Box, MenuItem, Menu } from "@mui/material";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import RefundModal from "./ui/refund-modal/RefungModal";
import ComplainModal from "./ui/complain-modal/ComplainModal";

import "./CourseComplain.scss";

const CourseRate: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose(): void {
    setAnchorEl(null);
  }

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
