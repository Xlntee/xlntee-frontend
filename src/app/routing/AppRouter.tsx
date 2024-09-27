import { Suspense, lazy, ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLoader from "./PageLoader";
import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "./ProtectedRoute";

import { PrivateLayout, PublicLayout } from "src/layouts";

// Lazy load the component
const AuthorizationPage = lazy(() => import("src/pages/authorization/AuthorizationPage"));
const CoursePreviewPage = lazy(() => import("src/pages/course-preview/CoursePreviewPage"));
const CreateCoursePage = lazy(() => import("src/pages/create-course/CreateCoursePage"));
// const HomePage = lazy(() => import("src/pages/home-template/HomePage"));
const LoginPage = lazy(() => import("src/pages/login/LoginPage"));
const RegistrationPage = lazy(() => import("src/pages/registration/RegistrationPage"));
const StudentLandingPage = lazy(() => import("src/pages/student/landing-page/LandingPage"));
const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: AppRoutes.home,
        element: (
          <SuspenseWrapper>
            {/* <HomePage title="Home page" /> */}
            <TeacherLandingPage title="Teacher landing" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.teacherLanding,
        element: (
          <SuspenseWrapper>
            <TeacherLandingPage title="Teacher landing" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.studentLanding,
        element: (
          <SuspenseWrapper>
            <StudentLandingPage title="Student landing" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.login,
        element: (
          <SuspenseWrapper>
            <LoginPage title="Login" />,
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.registration,
        element: (
          <SuspenseWrapper>
            <RegistrationPage title="Registration" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth,
        element: (
          <SuspenseWrapper>
            <AuthorizationPage title="Auth" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.authType,
        element: (
          <SuspenseWrapper>
            <AuthorizationPage title="Auth" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.previewCourse,
        element: (
          <SuspenseWrapper>
            <CoursePreviewPage title="Course preview" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.ui,
        element: (
          <SuspenseWrapper>
            <UiPage title="UI" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.notFound,
        element: <div>404</div>,
      },
      {
        path: AppRoutes.helpCenter,
        element: (
          <SuspenseWrapper>
            <HelpCenterPage title="Help Center" />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    element: <ProtectedRoute element={<PrivateLayout />} />,
    children: [
      {
        path: AppRoutes.createCourse,
        element: (
          <SuspenseWrapper>
            <CreateCoursePage title="Create course" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.myCourses,
        element: (
          <SuspenseWrapper>
            <MyCoursesPage title="My courses" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.statistic,
        element: (
          <SuspenseWrapper>
            <StatisticPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
