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
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration",
}
