import { FC, ReactNode } from "react";

import { Box, Stack, List, ListItem, Button, Typography, ListItemIcon, ListItemText, useTheme } from "@mui/material";

type PricePlanDescription = {
  title: string;
  text: string;
  icon: ReactNode;
};

export type PricePlanProps = {
  pretitle: string;
  title: string;
  text: string;
  button: string;
  bgColor: string;
  descriptionList: PricePlanDescription[];
  isDefault?: boolean;
};

const PricePlanCard: FC<PricePlanProps> = ({ isDefault, pretitle, title, text, button, descriptionList, bgColor }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      alignItems="center"
      gap="20px"
      width="100%"
      p="30px 30px 10px"
      borderRadius="20px"
      bgcolor={bgColor}
      border={`1px solid ${theme.palette.grey["200"]}`}
      className="base-shadow"
      position="relative"
    >
      {isDefault && (
        <Typography variant="body2" position="absolute" top="14px" left="14px">
          Default
        </Typography>
      )}
      <Typography variant="body1">{pretitle}</Typography>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1" textAlign="center">
        {text}
      </Typography>
      <Box marginBottom="30px">
        <Button
          color="primary"
          variant="contained"
          size="large"
          className="button-rounded-xl"
          sx={{
            fontWeight: 400,
            width: "250px"
          }}
        >
          {button}
        </Button>
      </Box>
      {descriptionList.length ? (
        <Box maxWidth="370px" marginInline="auto">
          <List>
            {descriptionList.map((item, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ marginBottom: "20px" }}>
                <ListItemIcon
                  sx={{
                    marginTop: 0,
                    color: theme.palette.text.primary
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2" fontWeight={700} fontSize={18}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" fontWeight={400} fontSize={18}>
                    {item.text}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : null}
    </Stack>
  );
};

export default PricePlanCard;
