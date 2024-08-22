import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  RegistrationPage,
  CreateCoursePage,
  AuthorizationPage,
  CoursePreviewPage,
  TeacherLandingPage,
  StudentLandingPage,
  UiPage,
} from "src/pages";

import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.base} element={<Navigate to={AppRoutes.teacherLanding} />} />
        <Route path={AppRoutes.teacherLanding} element={<TeacherLandingPage />} />
        <Route path={AppRoutes.studentLanding} element={<StudentLandingPage />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.registration} element={<RegistrationPage />} />
        <Route path={AppRoutes.auth} element={<AuthorizationPage />} />
        <Route path={AppRoutes.authType} element={<AuthorizationPage />} />
        <Route path={AppRoutes.previewCourse} element={<CoursePreviewPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={AppRoutes.createCourse} element={<CreateCoursePage />} />
        </Route>
        <Route path="/ui" element={<UiPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
