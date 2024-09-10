import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import "./StatisticCard.scss";

interface CountStatProps {
  promoImg: string;
  title: string;
  student: number;
  refund: number;
  review: number;
  complains: number;
  revenue: number;
  refundsTotal: number;
  rating: number;
}

const countStat: CountStatProps = {
  promoImg: "../../../public/assets/promo.png",
  title: "How to sell anything online.",
  student: 156,
  refund: 11,
  review: 99,
  complains: 3,
  revenue: 121.1,
  refundsTotal: 900,
  rating: 4.3,
};

// interface StatisticsCardProps {
//   countStat: CountStatProps;
// }
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#171a1c",
  }),
}));
function StatisticsCard() {
  return (
    <Box className="statistic">
      <Box className="statistic__imgBox">
        <Card
          sx={{
            width: 350,
            borderRadius: 5,
            mr: "24px",
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="190" image={countStat.promoImg} alt="promo" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {countStat.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <div>
        <Stack className="statistic__list" direction="row">
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.student}</span>

            <span className="statistic__itemDescription">Student / period</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.refund}</span>

            <span className="statistic__itemDescription">Refund / period</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.review}</span>

            <span className="statistic__itemDescription">Review / period</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.complains}</span>

            <span className="statistic__itemDescription">Complains</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.revenue}</span>

            <span className="statistic__itemDescription">Revenue / period</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.refundsTotal}</span>

            <span className="statistic__itemDescription">Refunds total / period</span>
          </Item>
          <Item className="statistic__item">
            <span className="statistic__itemCount">{countStat.rating}</span>

            <span className="statistic__itemDescription">Rating</span>
          </Item>
        </Stack>
      </div>
    </Box>
  );
}
export default StatisticsCard;
