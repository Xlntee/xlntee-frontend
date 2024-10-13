export const AppRoutes = {
  home: "/",
  studentLanding: "/student",

  auth: {
    base: "/auth",
    typeRole: "/auth/:authType/:role",
    login: "/auth/login",
    registration: "/auth/registration",
    accountVerification: "/auth/account-verification",
    emailUpdate: "/auth/email-update",
    passwordUpdate: "/auth/password-update"
  },
  student: {
    profile: "/student/dashboard/profile",
    myLearning: "/student/dashboard/my-learning",
    courseSingle: "/student/dashboard/course",
    courseVideo: "/student/dashboard/course/:id/video",
    courseTest: "/student/dashboard/course/:id/test",
    courseCertificate: "/student/dashboard/course/:id/certificate",
    completedCourses: "/student/dashboard/completed-courses",
    certificates: "/student/dashboard/certificates",
    certificatesSingle: "/student/dashboard/certificates/:id",
    support: "/student/dashboard/support",
    favoriteCourses: "/student/dashboard/favorite-courses",
    emailUpdate: "/student/dashboard/email-update",
    passwordUpdate: "/student/dashboard/password-update"
  },
  teacher: {
    dashboard: "/teacher/dashboard",
    profile: "/teacher/dashboard/profile",
    myCourses: "/teacher/dashboard/my-courses",
    myCourseSingle: "/teacher/dashboard/my-courses/:id",
    statistic: "/teacher/dashboard/statistic",
    billing: "/teacher/dashboard/billing",
    support: "/teacher/dashboard/support",
    tariffPlans: "/teacher/dashboard/tariff-plans",
    previewCourse: "/teacher/course-preview/:id",
    createCourse: "/teacher/dashboard/create-course",
    createCourseLanding: "/teacher/dashboard/create-course/landing",
    createCourseStructure: "/teacher/dashboard/create-course/structure",
    createCourseLecturer: "/teacher/dashboard/create-course/lecturer",
    createCoursePrice: "/teacher/dashboard/create-course/price",
    createCourseAdvertising: "/teacher/dashboard/create-course/advertising",
    emailUpdate: "teacher/dashboard/email-update",
    passwordUpdate: "teacher/dashboard/password-update"
  },
  notFound: "*",
  ui: "/ui",
  helpCenter: "/help-center"
};

export enum AuthPageSection {
  LOGIN = "login",
  REGISTRATION = "registration"
}
