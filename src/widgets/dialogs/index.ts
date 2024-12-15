import { lazy } from "react";

const dialogs = {
  COMPLAIN_INFO_DIALOG: lazy(() => import("./complain-info-dialog")),
  REFUND_INFO_DIALOG: lazy(() => import("./refundInfo-dialog")),
  STUDENT_COURSE_COMPLAIN_DIALOG: lazy(() => import("./student-course-complain-dialog")),
  STUDENT_COURSE_RATE_DIALOG: lazy(() => import("./student-course-rate-dialog")),
  STUDENT_COURSE_REFUND_DIALOG: lazy(() => import("./student-course-refund-dialog")),
  STUDENT_COURSE_SHARE_DIALOG: lazy(() => import("./student-course-share-dialog")),
  USER_MENU_DIALOG: lazy(() => import("./user-menu-dialog")),
  DELETE_PROMO_CODE_DIALOG: lazy(() => import("./delete-promo-code-dialog")),
  DELETE_LESSON_DIALOG: lazy(() => import("./delete-lesson-dialog")),
  DELETE_LECTURE_DIALOG: lazy(() => import("./delete-lecture-dialog"))
} as const;

export default dialogs;
