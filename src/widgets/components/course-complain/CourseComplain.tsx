import { Button, Box } from "@mui/material";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./CourseComplain.scss";

const CourseRate = () => {
  return (
    <Box className="course-complain">
      <Button endIcon={<ArrowDropDownIcon />} variant="black-text" className="course-complain__toggler">
        <NewReleasesOutlinedIcon />
      </Button>
    </Box>
  );
};

export default CourseRate;
