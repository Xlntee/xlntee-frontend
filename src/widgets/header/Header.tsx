import { NavLink } from "react-router-dom";
import "./Header.scss";
import { AppBar, Box, Container, Link, Toolbar } from "@mui/material";
import Logo from "./components/logo/Logo";
import { AppRoutes } from "src/app/routing/appRoutes";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link component={NavLink} to={AppRoutes.base}>
              Home
            </Link>
            <Link component={NavLink} to={AppRoutes.login}>
              Login
            </Link>
            <Link component={NavLink} to={AppRoutes.registration}>
              Registration
            </Link>
            <Link component={NavLink} to={AppRoutes.createCourse}>
              Create Course
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
