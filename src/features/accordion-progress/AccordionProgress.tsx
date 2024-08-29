import { FC } from "react";
import cn from "classnames";

import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./AccordionProgress.scss";

type AccordionProgressProps = {
  children?: React.ReactNode;
  heading: string;
  number?: number;
  progress?: {
    complete: number;
    total: number;
  };
  className?: string;
};

const AccordionProgress: FC<AccordionProgressProps> = ({ number, heading, progress, children, className }) => {
  return (
    <Accordion className={cn("accordion-progress", className)}>
      <AccordionSummary className="accordion-progress__summary" expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2" className="accordion-progress__header">
          {number && (
            <Typography component="span" className="accordion-progress__number">
              {number}
            </Typography>
          )}
          <Typography component="span" className="accordion-progress__heading">
            {heading}
          </Typography>
        </Typography>
        {progress && (
          <Typography component="span" className="accordion-progress__progress" variant="body2" fontWeight={300}>
            {progress.complete}/{progress.total}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails className="accordion-progress__details">{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionProgress;
