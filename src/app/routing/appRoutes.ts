export const AppRoutes = {
  home: "/",
  studentLanding: "/student",
  auth: "/auth",
  authType: "/auth/:authType/:role",
  authRoles: "/auth/roles",
  authTypeLogin: "/auth/login",
  authTypeRegistration: "/auth/registration",
  authAccountVerification: "/auth/account-verification",
  authEmailUpdate: "/auth/email-update",
  authPasswordUpdate: "/auth/password-update",
  createCourse: "/create-course",
  createCourseLanding: "/create-course/landing",
  createCourseStructure: "/create-course/structure",
  createCourseLecturer: "/create-course/lecturer",
  createCoursePrice: "/create-course/price",
  createCourseAdvertising: "/create-course/advertising",
  previewCourse: "/course/:courseId",
  notFound: "*",
  ui: "/ui",
  myCourses: "/my-courses",
  helpCenter: "/help-center",
  statistic: "/statistic",
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration",
}
