import { useTranslation } from "react-i18next";

import VideocamIcon from "@mui/icons-material/Videocam";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { Role } from "src/shared/config/user-role";
import { NavigationLinkType } from "src/shared/ui";
import { AppRoutes } from "src/shared/routes";

type ExtendedUserRoleType = Role | "default";

type UseHeaderNavigationProps = {
  navigationList: NavigationLinkType[];
};

export default function useHeaderNavigation(userRole: ExtendedUserRoleType = "default"): UseHeaderNavigationProps {
  const { t } = useTranslation("auth");

  const navList: Record<ExtendedUserRoleType, NavigationLinkType[]> = {
    default: [
      {
        id: "1",
        name: t("teacher"),
        path: "/"
      },
      {
        id: "2",
        name: t("student"),
        path: "/student"
      }
    ],
    student: [
      {
        id: "1",
        name: t("student-navigation.my-learning"),
        path: AppRoutes.student.myLearning,
        icon: <VideocamIcon />
      },
      {
        id: "2",
        name: t("student-navigation.completed-courses"),
        path: AppRoutes.student.completedCourses,
        icon: <DoneOutlineIcon />
      },
      {
        id: "3",
        name: t("student-navigation.certificates"),
        path: AppRoutes.student.certificates,
        icon: <LocalActivityIcon />
      },
      {
        id: "4",
        name: t("student-navigation.support"),
        path: AppRoutes.student.support,
        icon: <HelpOutlineIcon />
      }
    ],
    teacher: [
      {
        id: "1",
        name: t("teacher-navigation.courses"),
        path: AppRoutes.teacher.myCourses,
        icon: <VideocamIcon />
      },
      {
        id: "2",
        name: t("teacher-navigation.billing"),
        path: AppRoutes.teacher.billing,
        icon: <CreditCardIcon />
      },
      {
        id: "3",
        name: t("teacher-navigation.support"),
        path: AppRoutes.teacher.support,
        icon: <HelpOutlineIcon />
      },
      {
        id: "4",
        name: t("teacher-navigation.tariff-plans"),
        path: AppRoutes.teacher.tariffPlans,
        className: "navigation__action"
      }
    ]
  };

  return {
    navigationList: navList[userRole]
  };
}
