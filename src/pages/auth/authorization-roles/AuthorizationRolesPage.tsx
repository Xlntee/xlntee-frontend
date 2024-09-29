import { Box, Container, Grid } from "@mui/material";

import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";
import { AppRoutes } from "src/app/routing/appRoutes";
import { UserRole } from "src/shared/utils/enum";

import { RoleCard } from "./ui";

import "./AuthorizationRolesPage.scss";

const AuthorizationRolesPage = ({ title }: PageProps) => {
  useTitle(title);

  return (
    <Box component="section" className="section-auth-roles" py={{ xs: "40px", md: "80px" }}>
      <Container>
        <Box maxWidth="880px" marginInline="auto">
          <Grid container spacing={{ md: "40px" }} rowSpacing="40px">
            <Grid item xs={12} md={6} display="flex">
              <RoleCard
                image="/assets/student.svg"
                text="learn, improve, and organize your education space"
                type={UserRole.STUDENT}
                href={`${AppRoutes.authTypeLogin}/${UserRole.STUDENT}`}
              />
            </Grid>
            <Grid item xs={12} md={6} display="flex">
              <RoleCard
                image="/assets/teacher.svg"
                text="Create, manage, and empower your educational business"
                type={UserRole.TEACHER}
                href={`${AppRoutes.authTypeLogin}/${UserRole.TEACHER}`}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthorizationRolesPage;
