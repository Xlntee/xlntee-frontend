import { Link } from "react-router-dom";
import "./Header.scss";
import CourseHeaderComponent from "./components/course-header-component/CourseHeaderComponent";
import MainPageHeaderComponent from "./components/main-page-header-component/MainPageHeaderComponent";
import UserHeaderComponent from "./components/user-header-component/UserHeaderComponent";
import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./components/logo/Logo";

/* <div className="header">
      <div className="header__logo-block">
        
      </div>
      <MainPageHeaderComponent />
      { <UserHeaderComponent /> }
      { <CourseHeaderComponent /> }
    </div> */

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
