import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import { AuthPageSection } from "src/app/routing/appRoutes";
import useTitle from "src/hooks/useTitle/useTitle";
import { LoginForm, RegistrationForm } from "src/widgets";
import { PageProps } from "pages/type";

const authorizationPage = ({ title }: PageProps) => {
  useTitle(title);

  const { authType } = useParams();

  const cleanAuthType = (authType: string | undefined): AuthPageSection => {
    if (authType === AuthPageSection.LOGIN || authType === AuthPageSection.REGISTRATION) return authType;
    return AuthPageSection.LOGIN;
  };

  const [value, setValue] = useState<AuthPageSection>(cleanAuthType(authType));

  const handleChange = (_event: React.SyntheticEvent, newValue: AuthPageSection) => {
    setValue(newValue);
  };

  return (
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
              value="registration"
              component={Link}
              to="/auth/registration"
              sx={{ fontSize: "35px", textTransform: "none" }}
            />
          </TabList>
        </Box>
        <TabPanel value="login" sx={{ padding: "0" }}>
          <LoginForm />
        </TabPanel>
        <TabPanel value="registration" sx={{ padding: "0" }}>
          <RegistrationForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default authorizationPage;
