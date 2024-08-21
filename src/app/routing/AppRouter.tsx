import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import RegistrationPage from "../../pages/registration/RegistrationPage";
import UiPage from "pages/ui";
import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "src/app/routing/ProtectedRoute";
import CreateCoursePage from "pages/create-course/CreateCoursePage";
import AuthorizationPage from "pages/authorization/AuthorizationPage";
import CoursePreviewPage from "pages/course-preview/CoursePreviewPage";
import TeacherLandingPage from "pages/teacher/landing-page/LandingPage";
import StudentLandingPage from "pages/student/landing-page/LandingPage";

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
