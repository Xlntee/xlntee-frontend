export const AppRoutes = {
  home: "/",
  teacherLanding: "/teacher",
  studentLanding: "/student",
  auth: "/auth",
  authType: "/auth/:authType",
  login: "/login",
  registration: "/registration",
  createCourse: "/create-сourse",
  previewCourse: "/course/:courseId",
  notFound: "*",
  ui: "/ui",
  myCourses: '/my-courses',
  helpCenter: '/help-center'
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration",
}
