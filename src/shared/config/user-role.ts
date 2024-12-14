export const UserRoles = {
  student: "student",
  teacher: "teacher"
} as const;

type UserRoleKey = keyof typeof UserRoles;
export type Role = (typeof UserRoles)[UserRoleKey];
