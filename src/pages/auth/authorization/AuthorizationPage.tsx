import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Container } from "@mui/material";

import { AppRoutes, AuthPageSection } from "src/app/routing/appRoutes";
import useTitle from "src/hooks/useTitle/useTitle";
import { LoginForm, RegistrationForm } from "src/widgets/forms";
import { PageProps } from "pages/type";

import "./AuthorizationPage.scss";

const authorizationPage = ({ title }: PageProps) => {
  const loginTab = "login";
  const registrationTab = "registration";

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
    <Box component="section" className="section-auth">
      <Container>
        <Box className="auth-tab">
          <TabContext value={value}>
            <TabList className="auth-tab__tablist" onChange={handleChange}>
              <Tab
                label="Log in"
                value={loginTab}
                to={"/auth" + AppRoutes.login}
                component={Link}
                className="auth-tab__button"
              />
              <Tab
                label="Sing up"
                value={registrationTab}
                to={"/auth" + AppRoutes.registration}
                component={Link}
                className="auth-tab__button"
              />
            </TabList>
            <TabPanel value={loginTab} className="auth-tab__panel">
              <LoginForm />
            </TabPanel>
            <TabPanel value={registrationTab} className="auth-tab__panel">
              <RegistrationForm />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
};

export default authorizationPage;
