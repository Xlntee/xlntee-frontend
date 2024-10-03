import { FC, ReactNode } from "react";

import { Box, Stack, List, ListItem, Button, Typography, ListItemIcon, ListItemText } from "@mui/material";

type PricePlanDescription = {
  title: string;
  text: string;
  icon: ReactNode;
};

export type PricePlanProps = {
  pretitle: string;
  title: string;
  text: string;
  buttonText: string;
  bgColor: string;
  descriptionList: PricePlanDescription[];
};

const PricePlanCard: FC<PricePlanProps> = ({ pretitle, title, text, buttonText, descriptionList, bgColor }) => {
  return (
    <Stack
      gap="20px"
      width="100%"
      direction="column"
      p="30px 30px 10px"
      borderRadius="20px"
      bgcolor={bgColor}
      alignItems="center"
    >
      <Typography variant="body1">{pretitle}</Typography>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1" textAlign="center">
        {text}
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{
          borderRadius: "50px",
          borderWidth: 2,
          fontWeight: 400,
        }}
      >
        {buttonText}
      </Button>
      {descriptionList.length ? (
        <List>
          {descriptionList.map((item) => (
            <ListItem alignItems="flex-start" sx={{ marginBottom: "20px" }}>
              <ListItemIcon
                sx={{
                  marginTop: 0,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h6" fontWeight={400}>
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Stack>
  );
};

export default PricePlanCard;
