import { useTranslation } from "react-i18next";

import VideocamIcon from "@mui/icons-material/Videocam";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

import { AppRoutes } from "src/app/routing/appRoutes";
import { NavigationLinkType } from "src/features";

interface useHeaderNavigationStudentProps {
  navigationList: NavigationLinkType[];
}

export default function useHeaderNavigationStudent(): useHeaderNavigationStudentProps {
  const { t } = useTranslation("auth");

  const navList: NavigationLinkType[] = [
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
  ];

  return {
    navigationList: navList
  };
}
