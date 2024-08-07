import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";
import { useTranslation } from "react-i18next";

const PriceTable = () => {
  const { t } = useTranslation("teacher-landing");
  const thirdPlanList: string[] = t("thirdPlanList", { returnObjects: true });
  const isthirdPlanListArray = Array.isArray(thirdPlanList);

  return (
    <Box mb="130px">
      <TableContainer sx={{ width: "100%" }}>
        <Table>
          <TableBody
            sx={{
              border: `1px solid ${XlnteeColors.GrayStrokeColor}`,
              // borderTop: `1px solid ${XlnteeColors.GrayStrokeColor}`,
              // borderBottom: `1px solid ${XlnteeColors.GrayStrokeColor}`,
            }}
          >
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, width: "20%", height: "243px" }}
              >
                <Typography color="primary" sx={{ fontWeight: 700, fontSize: "34px" }}>
                  {t("tableCaption")}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  width: "20%",
                  verticalAlign: "top",
                  pt: "25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "15px",
                    }}
                  >
                    {t("firstPlanTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "19px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "12px",
                    }}
                  >
                    {t("firstPlanDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      p: "4.5px 29.5px",
                      bgcolor: "inherit",
                      border: `1px solid ${XlnteeColors.BlackElementColor}`,
                      borderRadius: "25px",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      "&:hover": {
                        bgcolor: `${XlnteeColors.BlackElementColor}`,
                        color: "#fff",
                        borderColor: `${XlnteeColors.BlackElementColor}`,
                      },
                    }}
                  >
                    Get for Free
                  </Button>
                </Box>
              </TableCell>
              <TableCell sx={{ width: "20%", verticalAlign: "top", pt: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "15px",
                    }}
                  >
                    {t("secondPlanTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "19px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "50px",
                    }}
                  >
                    {t("secondPlanDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      p: "5.5px 53.5px",
                      borderRadius: "25px",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "16px",
                    }}
                  >
                    Enroll
                  </Button>
                  <Typography color="secondary" sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "22px" }}>
                    Recommended
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                rowSpan={6}
                sx={{
                  borderLeft: "none",
                  borderRight: "none",
                  backgroundColor: "#EFEEFD",
                  width: "20%",
                  verticalAlign: "top",
                  p: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "35px",
                      color: `#000`,
                      mb: "5px",
                    }}
                  >
                    {t("thirdPlanTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      mb: "40px",
                    }}
                  >
                    {t("thirdPlanDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      p: "12.5px 37px",
                      bgcolor: "inherit",
                      border: `1px solid ${XlnteeColors.BlackElementColor}`,
                      borderRadius: "25px",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: '22px',
                      color: `${XlnteeColors.BlackTextColor}`,
                      "&:hover": {
                        bgcolor: `${XlnteeColors.BlackElementColor}`,
                        color: "#fff",
                        borderColor: `${XlnteeColors.BlackElementColor}`,
                      },
                      mb: "30px",
                    }}
                  >
                    {t("thirdPlanButton")}
                  </Button>
                  <List
                    sx={{
                      p: 0,
                      pl: 1.5,
                      color: `${XlnteeColors.BlackElementColor} `,
                      listStyleType: "disc",
                      "& li::marker": {
                        color: `${XlnteeColors.BlackElementColor} `,
                      },
                    }}
                  >
                    {isthirdPlanListArray &&
                      thirdPlanList.map((item, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            p: 0,
                            display: "list-item",
                            fontSize: "20px",
                            fontWeight: 300,
                            color: `${XlnteeColors.BlackElementColor} `,
                            lineHeight: "30px",
                            mb: "20px",
                          }}
                        >
                          {item}
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </TableCell>
              <TableCell sx={{ width: "20%", verticalAlign: "top", pt: "25px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "11px",
                    }}
                  >
                    {t("fourthPlanTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "22px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      textAlign: "center",
                      mb: "46px",
                    }}
                  >
                    {t("fourthPlanDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      p: "4.5px 25px",
                      bgcolor: "inherit",
                      border: `1px solid ${XlnteeColors.BlackElementColor}`,
                      borderRadius: "25px",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      "&:hover": {
                        bgcolor: `${XlnteeColors.BlackElementColor}`,
                        color: "#fff",
                        borderColor: `${XlnteeColors.BlackElementColor}`,
                      },
                    }}
                  >
                    Start for Free
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  fontWeight: 600,
                  fontSize: "24px",
                  color: `${XlnteeColors.BlackTextColor}`,
                  height: "142px",
                }}
              >
                {t("price")}
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  $0.00
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("commission")}
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  $9.00
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  $0.00
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  height: "142px",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("courseCount")}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("courseCountDescription")}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  1
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  1
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  1
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  height: "142px",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("studentCount")}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("studentCountDescription")}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  500
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  1000
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  1000
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  height: "142px",
                }}
              >
                <Typography sx={{ fontWeight: 600, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("storage")}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("storageDescription")}
                </Typography>
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  35GB
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  60GB
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  60GB
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  fontWeight: 600,
                  fontSize: "24px",
                  color: `${XlnteeColors.BlackTextColor}`,
                  height: "142px",
                }}
              >
                {t("certificates")}
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  Yes
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  Yes
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  Yes
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PriceTable;
