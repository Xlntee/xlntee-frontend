import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import RegistrationPage from "../../pages/registration/RegistrationPage";
import ComponentTestPage from "../../pages/component-test/ComponentTestPage";
import Landing from "../../pages/landing/Landing";
import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "src/app/routing/ProtectedRoute";
import CreateCoursePage from "pages/create-course/CreateCoursePage";
import AuthorizationPage from "pages/authorization/AuthorizationPage";
import TeacherModal from "src/widgets/teacher-modal/TeacherModal";
import StudentModal from "src/widgets/student-modal/StudentModal";
import ViolationModal from "src/widgets/violation-modal/ViolationModal";
import InformationModal from "src/widgets/information-modal/InformationModal";
import OnboardingModal from "src/widgets/onboarding-modal/OnboardingModal";
import CoursePreviewPage from "pages/course-preview/CoursePreviewPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
        <Route path={AppRoutes.registration} element={<RegistrationPage />} />
        <Route path={AppRoutes.auth} element={<AuthorizationPage />} />
        <Route path={AppRoutes.authType} element={<AuthorizationPage />} />
        <Route path={AppRoutes.previewCourse} element={<CoursePreviewPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={AppRoutes.createCourse} element={<CreateCoursePage />} />
        </Route>
        <Route
          path="/test"
          element={
            <ComponentTestPage>
              <TeacherModal />
              <StudentModal />
              <ViolationModal />
              <InformationModal />
              <OnboardingModal />
            </ComponentTestPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
