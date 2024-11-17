import { lazy } from "react";

const drawers = {
  CREATE_COURSE_DRAWER: lazy(() => import("./CreateCourseDrawer/CreateCourseDrawer")),
  NOTIFICATIONS_DRAWER: lazy(() => import("./NotificationsDrawer/NotificationsDrawer")),
  BASE_NAVIGATION_DRAWER: lazy(() => import("./BaseNavigationDrawer/BaseNavigationDrawer")),
  STUDENT_COURSE_NAVIGATION_DRAWER: lazy(() => import("./StudentCourseNavigationDrawer/StudentCourseNavigationDrawer")),
  TEACHER_CREATE_COURSE_NAVIGATION_DRAWER: lazy(
    () => import("./TeacherCreateCourseNavigationDrawer/TeacherCreateCourseNavigationDrawer")
  )
} as const;

export default drawers;
