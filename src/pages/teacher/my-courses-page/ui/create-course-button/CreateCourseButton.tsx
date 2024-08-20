import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./CreateCourseButton.scss";

interface CreateCourseButtonProps {
  RoutingTo: string;
}

const CreateCourseButton: React.FC<CreateCourseButtonProps> = ({ RoutingTo }) => {
  return (
    <Link to={RoutingTo} className="course-btn-card">
      <Box className="course-btn-card__inner-box">
        <Typography variant="h2" sx={{ fontWeight: 900, color: "#000" }}>
          +
        </Typography>
      </Box>
    </Link>
  );
};

export default CreateCourseButton;
