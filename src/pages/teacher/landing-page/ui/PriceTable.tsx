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
  Stack,
} from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";
import { useTranslation } from "react-i18next";

const PriceTable = () => {
  const { t } = useTranslation("teacher-landing");
  const thirdPlanList: string[] = t("teacher-landing.price-table-section.thirdPlanList", { returnObjects: true });
  const isthirdPlanListArray = Array.isArray(thirdPlanList);

  return (
    <Box mb={16}>
      {/* first left line */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          width: "calc((100vw - 1200px) / 2)",
          height: "1px",
          bgcolor: XlnteeColors.GrayStrokeColor,
        }}
      />

      {/* first right line */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          width: "calc((100vw - 1200px) / 2)",
          height: "1px",
          bgcolor: XlnteeColors.GrayStrokeColor,
        }}
      />
      {/* other lines */}
      {[...Array(6)].map((_, index) => (
        <>
          {/* left line */}
          <Box
            key={`left-line-${index}`}
            sx={{
              position: "absolute",
              top: `${1858 + index * 142}px`,
              left: 0,
              width: "calc((100vw - 1200px) / 2)",
              height: "1px",
              bgcolor: XlnteeColors.GrayStrokeColor,
            }}
          />
          {/* right line */}
          <Box
            key={`right-line-${index}`}
            sx={{
              position: "absolute",
              top: `${1858 + index * 142}px`,
              right: 0,
              width: "calc((100vw - 1200px) / 2)",
              height: "1px",
              bgcolor: XlnteeColors.GrayStrokeColor,
            }}
          />
        </>
      ))}

      <TableContainer sx={{ width: "100%" }}>
        <Table>
          <TableBody
            sx={{
              borderTop: `1px solid ${XlnteeColors.GrayStrokeColor}`,
              borderBottom: `1px solid ${XlnteeColors.GrayStrokeColor}`,
            }}
          >
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, width: "20%", height: "243px" }}
              >
                <Typography color="primary" sx={{ fontWeight: 700, fontSize: "34px" }}>
                  {t("teacher-landing.price-table-section.tableCaption")}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`,
                  width: "20%",
                  verticalAlign: "top",
                  pt: "25px",
                  pb: "40px",
                  height: "243px",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
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
                      {t("teacher-landing.price-table-section.firstPlanTitle")}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: `${XlnteeColors.BlackTextColor}`,
                        textAlign: "center",
                      }}
                    >
                      {t("teacher-landing.price-table-section.firstPlanDescription")}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      width: "150px",
                      height: "39px",
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
              <TableCell sx={{ width: "20%", verticalAlign: "top", pt: "25px", pb: "18px", height: "243px" }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
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
                      {t("teacher-landing.price-table-section.secondPlanTitle")}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: `${XlnteeColors.BlackTextColor}`,
                        textAlign: "center",
                      }}
                    >
                      {t("teacher-landing.price-table-section.secondPlanDescription")}
                    </Typography>
                  </Stack>
                  <Stack alignItems="center">
                    <Button
                      variant="contained"
                      sx={{
                        width: "150px",
                        height: "39px",
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
                  </Stack>
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
                  p: "15px 10px 0 21px",
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
                    {t("teacher-landing.price-table-section.thirdPlanTitle")}
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
                    {t("teacher-landing.price-table-section.thirdPlanDescription")}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      width: "198px",
                      height: "55px",
                      bgcolor: "inherit",
                      border: `1px solid ${XlnteeColors.BlackElementColor}`,
                      borderRadius: "25px",
                      textAlign: "center",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "22px",
                      color: `${XlnteeColors.BlackTextColor}`,
                      "&:hover": {
                        bgcolor: `${XlnteeColors.BlackElementColor}`,
                        color: "#fff",
                        borderColor: `${XlnteeColors.BlackElementColor}`,
                      },
                      mb: "30px",
                    }}
                  >
                    {t("teacher-landing.price-table-section.thirdPlanButton")}
                  </Button>
                  <List
                    sx={{
                      color: `${XlnteeColors.BlackElementColor} `,
                    }}
                  >
                    {isthirdPlanListArray &&
                      thirdPlanList.map((item, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            p: 0,
                            display: "list-item",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: `${XlnteeColors.BlackElementColor} `,
                            lineHeight: "25px",
                            mb: "20px",
                          }}
                        >
                          {item}
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </TableCell>
              <TableCell sx={{ width: "20%", verticalAlign: "top", pt: "25px", pb: "40px", height: "243px" }}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
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
                      {t("teacher-landing.price-table-section.fourthPlanTitle")}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "22px",
                        color: `${XlnteeColors.BlackTextColor}`,
                        textAlign: "center",
                      }}
                    >
                      {t("teacher-landing.price-table-section.fourthPlanDescription")}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      width: "150px",
                      height: "39px",
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
                {t("teacher-landing.price-table-section.price")}
              </TableCell>
              <TableCell sx={{ borderRight: `1px solid ${XlnteeColors.GrayStrokeColor}`, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: "24px", color: `${XlnteeColors.BlackTextColor}` }}>
                  $0.00
                </Typography>
                <Typography sx={{ fontWeight: 300, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("teacher-landing.price-table-section.commission")}
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
                  {t("teacher-landing.price-table-section.courseCount")}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("teacher-landing.price-table-section.courseCountDescription")}
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
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    color: `${XlnteeColors.BlackTextColor}`,
                    lineHeight: "32px",
                  }}
                >
                  {t("teacher-landing.price-table-section.studentCount")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: `${XlnteeColors.BlackTextColor}`,
                    lineHeight: "21px",
                  }}
                >
                  {t("teacher-landing.price-table-section.studentCountDescription")}
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
                  {t("teacher-landing.price-table-section.storage")}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "16px", color: `${XlnteeColors.BlackTextColor}` }}>
                  {t("teacher-landing.price-table-section.storageDescription")}
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
                {t("teacher-landing.price-table-section.certificates")}
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
