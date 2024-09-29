import { FC, useEffect, useState, SyntheticEvent, ReactNode } from "react";
import cn from "classnames";

import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./AccordionProgress.scss";

type AccordionProgressProps = {
  children?: ReactNode;
  heading: string;
  number?: number;
  progress?: {
    complete: number;
    total: number;
  };
  className?: string;
  open: boolean;
  onChange: (event: SyntheticEvent, expanded: boolean) => void;
};

const AccordionProgress: FC<AccordionProgressProps> = ({
  number,
  heading,
  progress,
  children,
  open,
  className,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    setIsExpanded(open);
  }, [open]);

  return (
    <Accordion expanded={isExpanded} className={cn("accordion-progress", className)} onChange={onChange}>
      <AccordionSummary className="accordion-progress__summary" expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2" className="accordion-progress__header">
          {number && (
            <Typography component="span" className="accordion-progress__number" variant="body2">
              {number}
            </Typography>
          )}
          <Typography component="span" className="accordion-progress__heading" variant="body2" accordion-progress>
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
