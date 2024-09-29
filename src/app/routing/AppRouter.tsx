import { Suspense, lazy, ReactNode, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useAppDispatch } from "src/app/store/store";
import { setRole } from "src/app/store/slices/user/userSlice";
import { UserRole } from "src/shared/utils/enum";
import { getUserPathByRole } from "src/shared/utils/methods";

import {
  PublicLayout,
  PrivateLayout,
  TeacherCreateCourseBlockLayout,
  TeacherCreateCoursePageLayout,
  StudentCourseBlockLayout,
  StudentCoursePageLayout,
} from "src/layouts";

import PageLoader from "./PageLoader";
import { AppRoutes } from "./appRoutes";
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
const StudentMyLearningPage = lazy(() => import("src/pages/student/my-learning/MyLearningPage"));
const StudentCoursePage = lazy(() => import("src/pages/student/course/CoursePage"));
const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));
const StatisticPage = lazy(() => import("src/pages/teacher/statistic-page/StatisticPage"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

const authRoutes = [
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
];

const teacherDashboardRoutes = [
  {
    path: AppRoutes.teacher.dashboard,
    element: (
      <SuspenseWrapper>
        <StatisticPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.myCourses,
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
];

const teacherDashboardCreateCourseRoutes = [
  {
    index: true,
    path: AppRoutes.teacher.createCourse,
    element: (
      <SuspenseWrapper>
        <CreateCourseGeneralPage title="Create course" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.createCourseLanding,
    element: (
      <SuspenseWrapper>
        <CreateCourseLandingPage title="Create course general" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.createCourseStructure,
    element: (
      <SuspenseWrapper>
        <CreateCourseStructurePage title="Create course general" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.createCourseLecturer,
    element: (
      <SuspenseWrapper>
        <CreateCourseLecturerPage title="Create course general" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.createCoursePrice,
    element: (
      <SuspenseWrapper>
        <CreateCoursePricePage title="Create course general" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.createCourseAdvertising,
    element: (
      <SuspenseWrapper>
        <CreateCourseAdvertisingPage title="Create course general" />
      </SuspenseWrapper>
    ),
  },
];

const studentDashboardRoutes = [
  {
    path: AppRoutes.student.dashboard,
    element: (
      <SuspenseWrapper>
        <StatisticPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.profile,
    element: <SuspenseWrapper>profile</SuspenseWrapper>,
  },
  {
    path: AppRoutes.student.myLearning,
    element: (
      <SuspenseWrapper>
        <StudentMyLearningPage title="My learning" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.completedCourses,
    element: <SuspenseWrapper>completedCourses</SuspenseWrapper>,
  },
  {
    path: AppRoutes.student.certificates,
    element: <SuspenseWrapper>certificates</SuspenseWrapper>,
  },
  {
    path: AppRoutes.student.pricing,
    element: <SuspenseWrapper>pricing</SuspenseWrapper>,
  },
  {
    path: AppRoutes.student.support,
    element: <SuspenseWrapper>support</SuspenseWrapper>,
  },
];

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
      ...authRoutes,
    ],
  },
  {
    element: <ProtectedRoute element={<PrivateLayout userRole={UserRole.STUDENT} />} />,
    children: studentDashboardRoutes,
  },
  {
    element: <ProtectedRoute element={<StudentCoursePageLayout />} />,
    children: [
      {
        element: <StudentCourseBlockLayout />,
        children: [
          {
            path: AppRoutes.student.myLearningSingle,
            element: (
              <SuspenseWrapper>
                <StudentCoursePage />
              </SuspenseWrapper>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute element={<PrivateLayout userRole={UserRole.TEACHER} />} />,
    children: teacherDashboardRoutes,
  },
  {
    element: <ProtectedRoute element={<TeacherCreateCoursePageLayout />} />,
    children: [
      {
        element: <TeacherCreateCourseBlockLayout />,
        children: teacherDashboardCreateCourseRoutes,
      },
    ],
  },
]);

const AppRouter = () => {
  const userRole = location.pathname.split("/")[1];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setRole({
        role: userRole,
        userRolePath: getUserPathByRole(userRole as UserRole),
      }),
    );
  }, []);

  return <RouterProvider router={router} />;
};

export default AppRouter;
