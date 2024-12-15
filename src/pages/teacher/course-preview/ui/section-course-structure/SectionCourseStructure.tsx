import { FC } from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Stack,
  Typography,
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
  Container
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import VideocamIcon from "@mui/icons-material/Videocam";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { styled } from "@mui/material/styles";

import "./SectionCourseStructure.scss";

const data = [
  {
    section: "Розділ 1",
    title: "З чого почати своє навчання?",
    details: [
      {
        icon: <VideocamIcon />,
        title: "Що таке програмування?"
      },
      {
        icon: <HelpCenterIcon />,
        title: "Основи Python"
      },
      {
        icon: <InsertDriveFileIcon />,
        title: "Де писати програиний код і як його перевіряти"
      },
      {
        icon: <VideocamIcon />,
        title: "Як написати калькулятор"
      }
    ]
  },
  {
    section: "Розділ 2",
    title: "З чого почати своє навчання?",
    details: [
      {
        icon: <VideocamIcon />,
        title: "Що таке програмування?"
      },
      {
        icon: <HelpCenterIcon />,
        title: "Основи Python"
      },
      {
        icon: <InsertDriveFileIcon />,
        title: "Де писати програиний код і як його перевіряти"
      },
      {
        icon: <VideocamIcon />,
        title: "Як написати калькулятор"
      }
    ]
  },
  {
    section: "Розділ 3",
    title: "З чого почати своє навчання?",
    details: [
      {
        icon: <VideocamIcon />,
        title: "Що таке програмування?"
      },
      {
        icon: <HelpCenterIcon />,
        title: "Основи Python"
      },
      {
        icon: <InsertDriveFileIcon />,
        title: "Де писати програиний код і як його перевіряти"
      },
      {
        icon: <VideocamIcon />,
        title: "Як написати калькулятор"
      }
    ]
  },
  {
    section: "Розділ 4",
    title: "З чого почати своє навчання?",
    details: [
      {
        icon: <VideocamIcon />,
        title: "Що таке програмування?"
      },
      {
        icon: <HelpCenterIcon />,
        title: "Основи Python"
      },
      {
        icon: <InsertDriveFileIcon />,
        title: "Де писати програиний код і як його перевіряти"
      },
      {
        icon: <VideocamIcon />,
        title: "Як написати калькулятор"
      }
    ]
  }
];

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  () => ({
    position: "static",
    backgroundColor: "transparent"
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropDownIcon color="primary" sx={{ fontSize: "32px", margin: "0" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  gap: "10px",
  minHeight: "36px",
  ".MuiAccordionSummary-content": {
    margin: 0
  }
}));

const SectionCourseStructure: FC = () => {
  const { t } = useTranslation("teacher-preview");

  return (
    <Box component="section" className="section-course-structure">
      <Container>
        <Stack
          p={{ xs: "20px", md: "26px 32px" }}
          borderRadius="20px"
          gap="24px"
          className="section-course-structure__inner"
        >
          <Typography variant="h2" fontWeight={400}>
            {t("section-course-structure.title")}
          </Typography>
          <Stack gap="10px">
            {data.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary>
                  <Stack flexDirection="row" gap="16px" alignItems="center">
                    <Typography variant="h5" fontWeight={500}>
                      <Typography component="span" color="primary">
                        {item.section}
                      </Typography>{" "}
                      &nbsp; <Typography component="span">{item.title}</Typography>
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <MuiAccordionDetails>
                  <Stack pl={{ xs: "40px", md: "114px" }} flexDirection="column" gap="10px">
                    {item.details.map((detail, detailIndex) => (
                      <Box
                        key={detailIndex}
                        sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                        fontWeight={500}
                      >
                        <Typography component="span" color="primary" display="flex" alignItems="center">
                          {detail.icon}
                        </Typography>
                        <Typography fontWeight={300}>{detail.title}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </MuiAccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionCourseStructure;
