import { Suspense, lazy, ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLoader from "./PageLoader";
import { AppRoutes } from "./appRoutes";
// import { ProtectedRoute } from "./ProtectedRoute";

import { PublicLayout, CreateCourseLayout, PrivateLayout, CourseLayout } from "src/layouts";
import { ProtectedRoute } from "./ProtectedRoute";

// Lazy load the component
const AuthorizationPage = lazy(() => import("pages/auth/authorization/AuthorizationPage"));
const AuthorizationRolesPage = lazy(() => import("pages/auth/authorization-roles/AuthorizationRolesPage"));
const AccountVerificationPage = lazy(() => import("pages/auth/account-verification/AccountVerificationPage"));
const EmailUpdatePage = lazy(() => import("src/pages/auth/email-update/EmailUpdatePage"));
const PasswordUpdatePage = lazy(() => import("src/pages/auth/password-update/PasswordUpdatePage"));

const CoursePreviewPage = lazy(() => import("src/pages/course-preview/CoursePreviewPage"));
const CreateCourseGeneralPage = lazy(() => import("src/pages/create-course/general/General"));
const CreateCourseLandingPage = lazy(() => import("src/pages/create-course/landing/Landing"));
const CreateCourseStructurePage = lazy(() => import("src/pages/create-course/structure/Structure"));
const CreateCourseLecturerPage = lazy(() => import("src/pages/create-course/lecturer/Lecturer"));
const CreateCoursePricePage = lazy(() => import("src/pages/create-course/price/Price"));
const CreateCourseAdvertisingPage = lazy(() => import("src/pages/create-course/advertising/Advertising"));
// const HomePage = lazy(() => import("src/pages/home-template/HomePage"));
const LoginPage = lazy(() => import("src/pages/login/LoginPage"));
const RegistrationPage = lazy(() => import("src/pages/registration/RegistrationPage"));
const StudentLandingPage = lazy(() => import("src/pages/student/landing-page/LandingPage"));
const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));
const StatisticPage = lazy(() => import("src/pages/teacher/statistic-page/StatisticPage"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        element: <CreateCourseLayout />,
        children: [
          {
            index: true,
            path: AppRoutes.createCourse,
            element: (
              <SuspenseWrapper>
                <CreateCourseGeneralPage title="Create course" />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.createCourseLanding,
            element: (
              <SuspenseWrapper>
                <CreateCourseLandingPage title="Create course general" />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.createCourseStructure,
            element: (
              <SuspenseWrapper>
                <CreateCourseStructurePage title="Create course general" />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.createCourseLecturer,
            element: (
              <SuspenseWrapper>
                <CreateCourseLecturerPage title="Create course general" />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.createCoursePrice,
            element: (
              <SuspenseWrapper>
                <CreateCoursePricePage title="Create course general" />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.createCourseAdvertising,
            element: (
              <SuspenseWrapper>
                <CreateCourseAdvertisingPage title="Create course general" />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        element: <CourseLayout />,
        children: [
          {
            index: true,
            path: "/course",
            element: (
              <SuspenseWrapper>
                <CoursePage />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: AppRoutes.home,
        element: (
          <SuspenseWrapper>
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
        path: `${AppRoutes.authType}`,
        element: (
          <SuspenseWrapper>
            <AuthorizationPage title="Auth" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.authRoles,
        element: (
          <SuspenseWrapper>
            <AuthorizationRolesPage title="Auth roles" />
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
      {
        path: AppRoutes.account_verification,
        element: (
          <SuspenseWrapper>
            <AccountVerificationPage title="Account verification" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.email_update,
        element: (
          <SuspenseWrapper>
            <EmailUpdatePage title="Email update" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.password_update,
        element: (
          <SuspenseWrapper>
            <PasswordUpdatePage title="Password update" />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    element: <ProtectedRoute element={<PrivateLayout />} />,
    children: [
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
