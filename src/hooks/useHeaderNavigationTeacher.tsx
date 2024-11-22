import { useTranslation } from "react-i18next";

import VideocamIcon from "@mui/icons-material/Videocam";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { AppRoutes } from "src/app/routing/appRoutes";
import { NavigationLinkType } from "src/features";

interface useHeaderNavigationTeacherProps {
  navigationList: NavigationLinkType[];
}

export default function useHeaderNavigationTeacher(): useHeaderNavigationTeacherProps {
  const { t } = useTranslation("auth");

  const navList: NavigationLinkType[] = [
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
  ];

  return {
    navigationList: navList
  };
}
