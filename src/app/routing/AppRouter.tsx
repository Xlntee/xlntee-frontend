import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

import { PrivateLayout, PublicLayout } from "src/layouts";

import { AppRoutes } from "./appRoutes";
import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: AppRoutes.home,
        element: <TeacherLandingPage title="Teacher landing" />,
      },
      {
        path: AppRoutes.teacherLanding,
        element: <TeacherLandingPage title="Teacher landing" />,
      },
      {
        path: AppRoutes.studentLanding,
        element: <StudentLandingPage title="Student landing" />,
      },
      {
        path: AppRoutes.login,
        element: <LoginPage title="Login" />,
      },
      {
        path: AppRoutes.registration,
        element: <RegistrationPage title="Registration" />,
      },
      {
        path: AppRoutes.auth,
        element: <AuthorizationPage title="Auth" />,
      },
      {
        path: AppRoutes.authType,
        element: <AuthorizationPage title="Auth" />,
      },
      {
        path: AppRoutes.previewCourse,
        element: <CoursePreviewPage title="Course preview" />,
      },
      {
        path: AppRoutes.ui,
        element: <UiPage title="UI" />,
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
        path: AppRoutes.createCourse,
        element: <CreateCoursePage title="Create course" />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
