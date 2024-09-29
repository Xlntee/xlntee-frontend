import { Suspense, lazy, ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLoader from "./PageLoader";
import { AppRoutes } from "./appRoutes";

import { PublicLayout, CreateCourseLayout, PrivateLayout, CourseLayout } from "src/layouts";
import { ProtectedRoute } from "./ProtectedRoute";

// Lazy load the component
const AuthorizationRolesPage = lazy(() => import("pages/auth/authorization-roles/AuthorizationRolesPage"));
const AuthorizationPage = lazy(() => import("pages/auth/authorization/AuthorizationPage"));
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

const StudentLandingPage = lazy(() => import("src/pages/student/landing-page/LandingPage"));
const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));
const StatisticPage = lazy(() => import("src/pages/teacher/statistic-page/StatisticPage"));
const CoursePage = lazy(() => import("src/pages/course/Course"));

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
        path: AppRoutes.auth.typeRole,
        element: (
          <SuspenseWrapper>
            <AuthorizationPage title="Auth" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth.roles,
        element: (
          <SuspenseWrapper>
            <AuthorizationRolesPage title="Auth roles" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth.accountVerification,
        element: (
          <SuspenseWrapper>
            <AccountVerificationPage title="Account verification" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth.emailUpdate,
        element: (
          <SuspenseWrapper>
            <EmailUpdatePage title="Email update" />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth.passwordUpdate,
        element: (
          <SuspenseWrapper>
            <PasswordUpdatePage title="Password update" />
          </SuspenseWrapper>
        ),
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
        path: AppRoutes.helpCenter,
        element: (
          <SuspenseWrapper>
            <HelpCenterPage title="Help Center" />
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
    ],
  },
  {
    element: <ProtectedRoute element={<PrivateLayout />} />,
    children: [
      {
        path: AppRoutes.dashboard.base,
        element: (
          <SuspenseWrapper>
            <StatisticPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.dashboard.myCourses,
        element: (
          <SuspenseWrapper>
            <MyCoursesPage title="My courses" />
          </SuspenseWrapper>
        ),
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
        path: AppRoutes.previewCourse,
        element: (
          <SuspenseWrapper>
            <CoursePreviewPage title="Course preview" />
          </SuspenseWrapper>
        ),
      },
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
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
