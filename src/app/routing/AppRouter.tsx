import { lazy, FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { UserRoles } from "src/shared/utils/user-role";

import {
  AuthLayout,
  PublicLayout,
  PrivateLayout,
  TeacherCreateCourseBlockLayout,
  TeacherCreateCoursePageLayout,
  StudentCourseBlockLayout,
  StudentCoursePageLayout
} from "src/layouts";

import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "./ProtectedRoute";

import { LoginForm, RegistrationForm, AccountVerificationForm, PasswordUpdate } from "src/widgets/forms";
import AuthTab from "src/widgets/components/auth-tab/AuthTab";
import { SuspenseWrapper } from "src/shared/utils/suspense-wrapper";

// Lazy load the component
const EmailUpdatePage = lazy(() => import("src/pages/auth/email-update/EmailUpdatePage"));
const PasswordUpdatePage = lazy(() => import("src/pages/auth/password-update/PasswordUpdatePage"));

const CoursePreviewPage = lazy(() => import("pages/teacher/course-preview/CoursePreviewPage"));
const CreateCourseGeneralPage = lazy(() => import("pages/teacher/create-course/general/General"));
const CreateCourseLandingPage = lazy(() => import("pages/teacher/create-course/landing/Landing"));
const CreateCourseStructurePage = lazy(() => import("pages/teacher/create-course/structure/Structure"));
const CreateCourseLecturerPage = lazy(() => import("pages/teacher/create-course/lecturer/Lecturer"));
const CreateCoursePricePage = lazy(() => import("pages/teacher/create-course/price/Price"));
const CreateCourseAdvertisingPage = lazy(() => import("pages/teacher/create-course/advertising/Advertising"));

const StudentLandingPage = lazy(() => import("src/pages/student/landing-page/LandingPage"));
const StudentMyLearningPage = lazy(() => import("src/pages/student/my-learning/MyLearningPage"));
const StudentCourseVideoPage = lazy(() => import("src/pages/student/course-video/CourseVideoPage"));
const StudentCourseTestPage = lazy(() => import("src/pages/student/course-test/CourseTestPage"));
const StudentCourseCertificatePage = lazy(() => import("src/pages/student/course-certificate/CourseCertificate"));
const StudentCompletedCoursesPage = lazy(() => import("src/pages/student/completed-courses/CompletedCoursesPage"));
const StudentCertificatesPage = lazy(() => import("src/pages/student/certificates/CertificatesPage"));
const StudentFavoriteCoursesPage = lazy(() => import("src/pages/student/favorite-courses/FavoriteCoursesPage"));
const StudentProfilePage = lazy(() => import("src/pages/student/profile-page/ProfilePage"));

const TeacherLandingPage = lazy(() => import("src/pages/teacher/landing-page/LandingPage"));
const UiPage = lazy(() => import("src/pages/ui"));
const MyCoursesPage = lazy(() => import("src/pages/teacher/my-courses-page/MyCoursesPage"));
const StatisticPage = lazy(() => import("src/pages/teacher/statistic-page/StatisticPage"));
const TeacherProfilePage = lazy(() => import("src/pages/teacher/profile-page/ProfilePage"));
const TariffPlanPage = lazy(() => import("src/pages/teacher/tariff-plan-page/TariffPlanPage"));
const HelpCenterPage = lazy(() => import("src/pages/help-center-page/HelpCenterPage"));

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
        )
      },
      {
        path: AppRoutes.auth.registration,
        element: (
          <SuspenseWrapper>
            <AuthTab>
              <RegistrationForm />
            </AuthTab>
          </SuspenseWrapper>
        )
      },
      {
        path: AppRoutes.auth.accountVerification,
        element: (
          <SuspenseWrapper>
            <AccountVerificationForm />
          </SuspenseWrapper>
        )
      },
      {
        path: AppRoutes.auth.passwordUpdate,
        element: (
          <SuspenseWrapper>
            <PasswordUpdate />
          </SuspenseWrapper>
        )
      }
    ]
  }
];

const teacherDashboardRoutes = [
  {
    path: AppRoutes.teacher.dashboard,
    element: (
      <SuspenseWrapper>
        <StatisticPage />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.profile,
    element: (
      <SuspenseWrapper>
        <TeacherProfilePage title="Profile" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.myCourses,
    element: (
      <SuspenseWrapper>
        <MyCoursesPage title="My courses" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.previewCourse,
    element: (
      <SuspenseWrapper>
        <CoursePreviewPage title="Course preview" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.support,
    element: (
      <SuspenseWrapper>
        <HelpCenterPage title="Help Center" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.tariffPlans,
    element: (
      <SuspenseWrapper>
        <TariffPlanPage title="Tariff plan" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.emailUpdate,
    element: (
      <SuspenseWrapper>
        <EmailUpdatePage title="Email update" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.passwordUpdate,
    element: (
      <SuspenseWrapper>
        <PasswordUpdatePage title="Password update" />
      </SuspenseWrapper>
    )
  }
];

const teacherDashboardCreateCourseRoutes = [
  {
    index: true,
    path: AppRoutes.teacher.createCourse,
    element: (
      <SuspenseWrapper>
        <CreateCourseGeneralPage title="Create course" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.createCourseLanding,
    element: (
      <SuspenseWrapper>
        <CreateCourseLandingPage title="Create course general" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.createCourseStructure,
    element: (
      <SuspenseWrapper>
        <CreateCourseStructurePage title="Create course general" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.createCourseLecturer,
    element: (
      <SuspenseWrapper>
        <CreateCourseLecturerPage title="Create course general" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.createCoursePrice,
    element: (
      <SuspenseWrapper>
        <CreateCoursePricePage title="Create course general" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.teacher.createCourseAdvertising,
    element: (
      <SuspenseWrapper>
        <CreateCourseAdvertisingPage title="Create course general" />
      </SuspenseWrapper>
    )
  }
];

const studentDashboardRoutes = [
  {
    path: AppRoutes.student.myLearning,
    element: (
      <SuspenseWrapper>
        <StudentMyLearningPage title="My learning" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.profile,
    element: <StudentProfilePage title="Profile" />
  },
  {
    path: AppRoutes.student.completedCourses,
    element: (
      <SuspenseWrapper>
        <StudentCompletedCoursesPage title="Completed courses" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.certificates,
    element: (
      <SuspenseWrapper>
        <StudentCertificatesPage title="Certificates" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.support,
    element: (
      <SuspenseWrapper>
        <HelpCenterPage title="Help Center" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.favoriteCourses,
    element: (
      <SuspenseWrapper>
        <StudentFavoriteCoursesPage title="Favorite courses" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.emailUpdate,
    element: (
      <SuspenseWrapper>
        <EmailUpdatePage title="Email update" />
      </SuspenseWrapper>
    )
  },
  {
    path: AppRoutes.student.passwordUpdate,
    element: (
      <SuspenseWrapper>
        <PasswordUpdatePage title="Password update" />
      </SuspenseWrapper>
    )
  }
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
        )
      },
      {
        path: AppRoutes.studentLanding,
        element: (
          <SuspenseWrapper>
            <StudentLandingPage title="Student landing" />
          </SuspenseWrapper>
        )
      },
      {
        path: AppRoutes.helpCenter,
        element: (
          <SuspenseWrapper>
            <HelpCenterPage title="Help Center" />
          </SuspenseWrapper>
        )
      },
      {
        path: AppRoutes.ui,
        element: (
          <SuspenseWrapper>
            <UiPage title="UI" />
          </SuspenseWrapper>
        )
      },
      {
        path: AppRoutes.notFound,
        element: <div>404</div>
      },
      ...authRoutes
    ]
  },
  {
    element: <ProtectedRoute element={<PrivateLayout userRole={UserRoles.student} />} />,
    children: studentDashboardRoutes
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
            )
          },
          {
            path: AppRoutes.student.courseTest,
            element: (
              <SuspenseWrapper>
                <StudentCourseTestPage />
              </SuspenseWrapper>
            )
          },
          {
            path: AppRoutes.student.courseCertificate,
            element: (
              <SuspenseWrapper>
                <StudentCourseCertificatePage />
              </SuspenseWrapper>
            )
          }
        ]
      }
    ]
  },
  {
    element: <ProtectedRoute element={<PrivateLayout userRole={UserRoles.teacher} />} />,
    children: teacherDashboardRoutes
  },
  {
    element: <ProtectedRoute element={<TeacherCreateCoursePageLayout />} />,
    children: [
      {
        element: <TeacherCreateCourseBlockLayout />,
        children: teacherDashboardCreateCourseRoutes
      }
    ]
  }
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
