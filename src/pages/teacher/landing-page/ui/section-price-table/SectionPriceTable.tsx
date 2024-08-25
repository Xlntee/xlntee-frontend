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
  Container,
  TableHead,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const PriceTable = () => {
  const theme = useTheme();

  const { t } = useTranslation("teacher-landing");
  const thirdPlanList: string[] = t("teacher-landing.price-table-section.thirdPlanList", { returnObjects: true });
  const isthirdPlanListArray = Array.isArray(thirdPlanList);

  const tableBodyRow2 = [1, 1, 1];
  const tableBodyRow3 = [500, 1000, 1000];
  const tableBodyRow4 = ["35GB", "60GB", "60GB"];

  return (
    <Box component="section" className="section-price-table" py="40px">
      <Container>
        <TableContainer>
          <Table className="price-table">
            <TableHead className="price-table__thead">
              <TableRow>
                <TableCell component="th" className="first-cell">
                  <Typography variant="h2" color="primary" className="price-table__title">
                    {t("teacher-landing.price-table-section.tableCaption")}
                  </Typography>
                </TableCell>
                <TableCell component="th">
                  <Box textAlign="center">
                    <Typography variant="h4" className="price-table__title">
                      {t("teacher-landing.price-table-section.firstPlanTitle")}
                    </Typography>
                    <Typography component="p" variant="caption" className="price-table__subtitle">
                      {t("teacher-landing.price-table-section.firstPlanDescription")}
                    </Typography>
                    <Button variant="black-outline" size="medium" className="price-table__cta-button">
                      Get for Free
                    </Button>
                  </Box>
                </TableCell>
                <TableCell component="th">
                  <Box textAlign="center">
                    <Typography variant="h4" className="price-table__title">
                      {t("teacher-landing.price-table-section.secondPlanTitle")}
                    </Typography>
                    <Typography component="p" variant="caption" className="price-table__subtitle">
                      {t("teacher-landing.price-table-section.secondPlanDescription")}
                    </Typography>
                    <Box>
                      <Button color="primary" variant="contained" size="medium" className="price-table__cta-button">
                        Enroll
                      </Button>
                      <Typography color="secondary.main" variant="body2" fontWeight={300}>
                        Recommended
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  rowSpan={6}
                  component="th"
                  style={{
                    backgroundColor: theme.palette.info.light,
                  }}
                >
                  <Typography variant="h4" className="price-table__title">
                    {t("teacher-landing.price-table-section.thirdPlanTitle")}
                  </Typography>
                  <Typography>{t("teacher-landing.price-table-section.thirdPlanDescription")}</Typography>
                </TableCell>
                <TableCell component="th">
                  <Box textAlign="center">
                    <Typography variant="h4" className="price-table__title">
                      {t("teacher-landing.price-table-section.fourthPlanTitle")}
                    </Typography>
                    <Typography component="p" variant="caption" className="price-table__subtitle">
                      {t("teacher-landing.price-table-section.fourthPlanDescription")}
                    </Typography>
                    <Button variant="black-outline" size="medium" className="price-table__cta-button">
                      Start for Free
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="price-table__tbody">
              <TableRow>
                <TableCell>
                  <Typography variant="h4" className="price-table__side-title">
                    {t("teacher-landing.price-table-section.price")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">$0.00</Typography>
                    <Typography variant="body2">{t("teacher-landing.price-table-section.commission")}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">$9.00</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  rowSpan={5}
                  style={{
                    backgroundColor: theme.palette.info.light,
                    verticalAlign: "top",
                  }}
                >
                  <Box textAlign="center" mb="26px">
                    <Button variant="black-outline" size="medium" className="price-table__cta-button">
                      {t("teacher-landing.price-table-section.thirdPlanButton")}
                    </Button>
                  </Box>
                  <List
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {isthirdPlanListArray &&
                      thirdPlanList.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                  </List>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">$0.00</Typography>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" className="price-table__side-title">
                    {t("teacher-landing.price-table-section.courseCount")}
                  </Typography>
                  <Typography variant="body2">
                    {t("teacher-landing.price-table-section.courseCountDescription")}
                  </Typography>
                </TableCell>
                {tableBodyRow2.map((item, index) => (
                  <TableCell key={index}>
                    <Box textAlign="center">
                      <Typography className="price-table__value">{item}</Typography>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" className="price-table__side-title">
                    {t("teacher-landing.price-table-section.studentCount")}
                  </Typography>
                  <Typography variant="body2">
                    {t("teacher-landing.price-table-section.studentCountDescription")}
                  </Typography>
                </TableCell>
                {tableBodyRow3.map((item, index) => (
                  <TableCell key={index}>
                    <Box textAlign="center">
                      <Typography className="price-table__value">{item}</Typography>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" className="price-table__side-title">
                    {t("teacher-landing.price-table-section.storage")}
                  </Typography>
                  <Typography variant="body2">{t("teacher-landing.price-table-section.storageDescription")}</Typography>
                </TableCell>
                {tableBodyRow4.map((item, index) => (
                  <TableCell key={index}>
                    <Box textAlign="center">
                      <Typography className="price-table__value">{item}</Typography>
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" className="price-table__side-title">
                    {t("teacher-landing.price-table-section.certificates")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">Yes</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">Yes</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box textAlign="center">
                    <Typography className="price-table__value">Yes</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default PriceTable;
