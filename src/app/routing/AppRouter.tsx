import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import RegistrationPage from "../../pages/registration/RegistrationPage";
import ComponentTestPage from "../../pages/component-test/ComponentTestPage";
import Landing from "../../pages/landing/Landing";
import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "src/app/routing/ProtectedRoute";
import CreateCoursePage from "pages/create-course/CreateCoursePage";
import AuthorizationPage from "pages/authorization/AuthorizationPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.registration} element={<RegistrationPage />} />
        <Route path={AppRoutes.auth} element={<AuthorizationPage />} />
        <Route path={AppRoutes.authType} element={<AuthorizationPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={AppRoutes.createCourse} element={<CreateCoursePage />} />
        </Route>
        <Route path="/test" element={<ComponentTestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
