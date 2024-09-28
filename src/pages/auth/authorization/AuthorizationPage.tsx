import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Container } from "@mui/material";

import { AppRoutes, AuthPageSection } from "src/app/routing/appRoutes";
import useTitle from "src/hooks/useTitle/useTitle";
import { LoginForm, RegistrationForm } from "src/widgets/forms";
import { PageProps } from "pages/type";

import "./AuthorizationPage.scss";

const authorizationPage = ({ title }: PageProps) => {
  useTitle(title);

  const { authType } = useParams();
  const [value, setValue] = useState<AuthPageSection>(AuthPageSection.LOGIN);

  useEffect(() => {
    if (authType) {
      setValue(authType as AuthPageSection);
    }
  }, [authType]);

  return (
    <Box component="section" className="section-auth">
      <Container>
        <Box className="auth-tab">
          <TabContext value={value}>
            <TabList className="auth-tab__tablist" onChange={(_, value) => setValue(value)}>
              <Tab
                label="Log in"
                value={AuthPageSection.LOGIN}
                to={AppRoutes.login}
                component={Link}
                className="auth-tab__button"
              />
              <Tab
                label="Sing up"
                value={AuthPageSection.REGISTRATION}
                to={AppRoutes.registration}
                component={Link}
                className="auth-tab__button"
              />
            </TabList>
            <TabPanel value={AuthPageSection.LOGIN} className="auth-tab__panel">
              <LoginForm />
            </TabPanel>
            <TabPanel value={AuthPageSection.REGISTRATION} className="auth-tab__panel">
              <RegistrationForm />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
};

export default authorizationPage;
