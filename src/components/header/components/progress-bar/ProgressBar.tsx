import { Box, LinearProgress, Typography } from "@mui/material";

interface IProps {
  percentage: number;
}

const ProgressBar: React.FC<IProps> = ({ percentage = 0 }) => {
  return (
    <Box sx={{ width: 290, height: 35, position: "relative" }}>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: "100%",
          backgroundColor: "#32449C",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#35C587",
          },
        }}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        {`${Math.round(percentage)}%`}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
