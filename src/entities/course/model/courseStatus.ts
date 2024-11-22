export const CourseStatus = {
  WAITING_FOR_APPROVE: "WAITING_FOR_APPROVE",
  APPROVED: "APPROVED",
  SUCCESS: "SUCCESS",
  BLOCKED: "BLOCKED"
} as const;

export type CourseStatusKeyType = keyof typeof CourseStatus;

export type CourseStatusType = (typeof CourseStatus)[CourseStatusKeyType];
