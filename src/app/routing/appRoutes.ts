export const AppRoutes = {
  base: "/",
  home: "/home",
  auth: "/auth",
  authType: "/auth/:authType",
  login: "/login",
  registration: "/registration",
  createCourse: "/createCourse",
  previewCourse: "/course/:courseId",
  notFound: "/page-not-found",
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration",
}
