import { FC, ReactNode } from "react";
import cn from "classnames";
import { LinearProgress, Box, Typography } from "@mui/material";

import "./Progress.scss";

interface IProgress {
  value?: number;
  color?: "primary" | "secondary" | "success" | "info" | "warning";
  title?: string;
  showValue?: boolean;
  children?: ReactNode;
  size?: "sm" | "lg";
  className?: string;
}

const Progress: FC<IProgress> = ({
  value = 0,
  color = "success",
  size = "lg",
  title,
  showValue,
  className,
  children,
}) => {
  const cnModification = cn({
    "progress--small": size === "sm",
  });

  const classnames = cn("progress", cnModification, className, {
    full: value === 100,
  });

  return (
    <Box className={classnames}>
      <LinearProgress variant="determinate" value={value} color={color} />
      {showValue && value > 0 && (
        <Typography className="progress__value" variant="body2">
          {value}%
        </Typography>
      )}
      {title && <Typography className="progress__title">{title}</Typography>}
      {children && <Typography className="progress__content">{children}</Typography>}
    </Box>
  );
};

export default Progress;
