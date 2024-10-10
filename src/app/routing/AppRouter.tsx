import { Suspense, lazy, ReactNode, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useAppDispatch } from "src/app/store/store";
import { setRole } from "src/app/store/slices/user/userSlice";
import { UserRole } from "src/shared/utils/enum";
import { getUserPathByRole } from "src/shared/utils/methods";

import {
  AuthLayout,
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

import { LoginForm, RegistrationForm, AccountVerificationForm } from "src/widgets/forms";
import AuthTab from "src/widgets/components/auth-tab/AuthTab";

// Lazy load the component
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
const StudentCourseVideoPage = lazy(() => import("src/pages/student/course-video/CourseVideoPage"));
const StudentCourseTestPage = lazy(() => import("src/pages/student/course-test/CourseTestPage"));
const StudentCompletedCoursesPage = lazy(() => import("src/pages/student/completed-courses/CompletedCoursesPage"));
const StudentCertificatesPage = lazy(() => import("src/pages/student/certificates/CertificatesPage"));
const StudentFavoriteCoursesPage = lazy(() => import("src/pages/student/favorite-courses/FavoriteCoursesPage"));

const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const StatisticPage = lazy(() => import("src/pages/teacher/statistic-page/StatisticPage"));
const ProfilePage = lazy(() => import("src/pages/teacher/profile-page/ProfilePage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

const authRoutes = [
  {
    path: AppRoutes.auth.base,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: AppRoutes.auth.login,
        element: (
          <SuspenseWrapper>
            <AuthTab>
              <LoginForm />
            </AuthTab>
          </SuspenseWrapper>
        ),
      },
      {
        path: `${AppRoutes.auth.registration}/:role`,
        element: (
          <SuspenseWrapper>
            <AuthTab>
              <RegistrationForm />
            </AuthTab>
          </SuspenseWrapper>
        ),
      },
      {
        path: AppRoutes.auth.accountVerification,
        element: (
          <SuspenseWrapper>
            <AccountVerificationForm />
          </SuspenseWrapper>
        ),
      },
    ],
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
    path: AppRoutes.teacher.profile,
    element: (
      <SuspenseWrapper>
        <ProfilePage title="Profile" />
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
    path: AppRoutes.teacher.previewCourse,
    element: (
      <SuspenseWrapper>
        <CoursePreviewPage title="Course preview" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.support,
    element: (
      <SuspenseWrapper>
        <HelpCenterPage title="Help Center" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.emailUpdate,
    element: (
      <SuspenseWrapper>
        <EmailUpdatePage title="Email update" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.teacher.passwordUpdate,
    element: (
      <SuspenseWrapper>
        <PasswordUpdatePage title="Password update" />
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
    path: AppRoutes.student.myLearning,
    element: (
      <SuspenseWrapper>
        <StudentMyLearningPage title="My learning" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.completedCourses,
    element: (
      <SuspenseWrapper>
        <StudentCompletedCoursesPage title="Completed courses" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.certificates,
    element: (
      <SuspenseWrapper>
        <StudentCertificatesPage title="Certificates" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.pricing,
    element: <SuspenseWrapper>pricing</SuspenseWrapper>,
  },
  {
    path: AppRoutes.student.support,
    element: (
      <SuspenseWrapper>
        <HelpCenterPage title="Help Center" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.favoriteCourses,
    element: (
      <SuspenseWrapper>
        <StudentFavoriteCoursesPage title="Favorite courses" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.emailUpdate,
    element: (
      <SuspenseWrapper>
        <EmailUpdatePage title="Email update" />
      </SuspenseWrapper>
    ),
  },
  {
    path: AppRoutes.student.passwordUpdate,
    element: (
      <SuspenseWrapper>
        <PasswordUpdatePage title="Password update" />
      </SuspenseWrapper>
    ),
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
            path: AppRoutes.student.courseVideo,
            element: (
              <SuspenseWrapper>
                <StudentCourseVideoPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: AppRoutes.student.courseTest,
            element: (
              <SuspenseWrapper>
                <StudentCourseTestPage />
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
