export const AppRoutes = {
  home: "/",
  teacherLanding: "/teacher",
  studentLanding: "/student",
  auth: "/auth",
  authType: "/auth/:authType",
  login: "/auth/login",
  registration: "/auth/registration",
  createCourse: "/create-сourse",
  previewCourse: "/course/:courseId",
  notFound: "*",
  ui: "/ui",
  myCourses: "/my-courses",
  helpCenter: "/help-center",
  statistic: "/statistic",
  account_verification: "/account-verification",
  email_update: "/email-update",
  password_update: "/password-update",
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration",
}
