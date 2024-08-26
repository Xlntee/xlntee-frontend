import {
  Box,
  Stack,
  Typography,
  Accordion as MuiAccordion,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import VideocamIcon from "@mui/icons-material/Videocam";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { styled } from "@mui/material/styles";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  () => ({
    position: "static",
    backgroundColor: "transparent",
    color: "#fff",
  }),
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowDropDownIcon sx={{ fontSize: "30px", color: "#fff" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
}));

const CoursePreviewStructureBlock = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "435px", bgcolor: "#643dff", borderRadius: "20px" }}>
      <Typography
        sx={{ margin: "15px 0 30px 30px", fontFamily: "Inter", fontWeight: 900, fontSize: "34px", color: "#fff" }}
      >
        Структура курсу
      </Typography>
      <Box sx={{ padding: "0 60px 40px 60px" }}>
        <Accordion>
          <AccordionSummary>
            <Stack flexDirection="row" gap="15px" alignItems="center">
              <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px" }}>Розділ 1</Typography>
              <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "24px" }}>
                З чого почати своє навчання?
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ pl: "50px" }} flexDirection="column" gap="10px">
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#1</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Що таке програмування?
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HelpCenterIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#2</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>Основи Python</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <InsertDriveFileIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#3</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Де писати програиний код і як його перевіряти
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#4</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Як написати калькулятор
                </Typography>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Stack flexDirection="row" gap="15px" alignItems="center">
              <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px" }}>Розділ 1</Typography>
              <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "24px" }}>
                З чого почати своє навчання?
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ pl: "50px" }} flexDirection="column" gap="10px">
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#1</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Що таке програмування?
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HelpCenterIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#2</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>Основи Python</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <InsertDriveFileIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#3</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Де писати програиний код і як його перевіряти
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#4</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Як написати калькулятор
                </Typography>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Stack flexDirection="row" gap="15px" alignItems="center">
              <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px" }}>Розділ 1</Typography>
              <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "24px" }}>
                З чого почати своє навчання?
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ pl: "50px" }} flexDirection="column" gap="10px">
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#1</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Що таке програмування?
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HelpCenterIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#2</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>Основи Python</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <InsertDriveFileIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#3</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Де писати програиний код і як його перевіряти
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#4</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Як написати калькулятор
                </Typography>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Stack flexDirection="row" gap="15px" alignItems="center">
              <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px" }}>Розділ 1</Typography>
              <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "24px" }}>
                З чого почати своє навчання?
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{ pl: "50px" }} flexDirection="column" gap="10px">
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#1</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Що таке програмування?
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <HelpCenterIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#2</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>Основи Python</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <InsertDriveFileIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#3</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Де писати програиний код і як його перевіряти
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <VideocamIcon sx={{ fontSize: "30px" }} />
                <Typography sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "20px" }}>#4</Typography>
                <Typography sx={{ fontFamily: "Inter", fontWeight: 400, fontSize: "20px" }}>
                  Як написати калькулятор
                </Typography>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default CoursePreviewStructureBlock;
