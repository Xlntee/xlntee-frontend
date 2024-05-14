import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoginForm from "src/widgets/login-form/LoginForm";
import Page from "src/widgets/page/Page";
import RegistrationForm from "src/widgets/registration-form/RegistrationForm";

const authorizationPage = () => {
  const { authType } = useParams();

  const cleanAuthType = (authType: string | undefined) => {
    if (authType === "login" || authType === "reg") return authType;
    return "login";
  };

  const [value, setValue] = useState(cleanAuthType(authType));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Page>
      <Box sx={{ width: "504px", margin: "50px auto" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              sx={{
                ".MuiTabs-indicator": { backgroundColor: "#000" },
                ".Mui-selected": { color: "#000 !important", fontWeight: 700 },
              }}
            >
              <Tab
                label="Вхід"
                value="login"
                component={Link}
                to="/auth/login"
                sx={{ fontSize: "35px", textTransform: "none" }}
              />
              <Tab
                label="Реєстрація"
                value="reg"
                component={Link}
                to="/auth/reg"
                sx={{ fontSize: "35px", textTransform: "none" }}
              />
            </TabList>
          </Box>
          <TabPanel value="login" sx={{ padding: "0" }}>
            <LoginForm />
          </TabPanel>
          <TabPanel value="reg" sx={{ padding: "0" }}>
            <RegistrationForm />
          </TabPanel>
        </TabContext>
      </Box>
    </Page>
  );
};

export default authorizationPage;
