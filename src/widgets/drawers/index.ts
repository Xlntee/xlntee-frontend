import { lazy } from "react";

import BaseNavigationDrawer from "./base-navigation-drawer";
import NotificationsDrawer from "./notifications-drawer";
import CreateCourseDrawer from "./create-course-drawer";

const drawers = {
  NOTIFICATIONS_DRAWER: NotificationsDrawer,
  BASE_NAVIGATION_DRAWER: BaseNavigationDrawer,
  CREATE_COURSE_DRAWER: CreateCourseDrawer,
  STUDENT_COURSE_NAVIGATION_DRAWER: lazy(() => import("./student-course-navigation-drawer")),
  TEACHER_CREATE_COURSE_NAVIGATION_DRAWER: lazy(() => import("./teacher-create-course-navigation-drawer"))
} as const;

export default drawers;
