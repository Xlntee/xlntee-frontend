import { lazy } from "react";

const dialogs = {
  COMPLAIN_INFO_DIALOG: lazy(() => import("./ComplainInfoDialog/ComplainInfoDialog")),
  REFUND_INFO_DIALOG: lazy(() => import("./RefundInfoDialog/RefundInfoDialog")),
  STUDENT_COURSE_COMPLAIN_DIALOG: lazy(() => import("./StudentCourseComplainDialog/StudentCourseComplainDialog")),
  STUDENT_COURSE_RATE_DIALOG: lazy(() => import("./StudentCourseRateDialog/StudentCourseRateDialog")),
  STUDENT_COURSE_REFUND_DIALOG: lazy(() => import("./StudentCourseRefundDialog/StudentCourseRefundDialog")),
  STUDENT_COURSE_SHARE_DIALOG: lazy(() => import("./StudentCourseShareDialog/StudentCourseShareDialog")),
  USER_MENU_DIALOG: lazy(() => import("./UserMenuDialog/UserMenuDialog")),
  DELETE_PROMO_CODE: lazy(() => import("./DeletePromoCode/DeletePromoCode"))
} as const;

export default dialogs;
