export type DrawerNames =
  | "CREATE_COURSE_DRAWER"
  | "NOTIFICATIONS_DRAWER"
  | "BASE_NAVIGATION_DRAWER"
  | "STUDENT_COURSE_NAVIGATION_DRAWER"
  | "TEACHER_CREATE_COURSE_NAVIGATION_DRAWER";

export type PayloadDialogProps = {
  dialogName: DrawerNames;
  props?: Partial<DrawerProps>;
};

export type DrawerProps = {
  direction: "left" | "right";
};
