import { useTranslation } from "react-i18next";
import { NavigationLinkType } from "src/features";

interface UseHeaderNavigationProps {
  navigationList: NavigationLinkType[];
}

export default function useHeaderNavigation(): UseHeaderNavigationProps {
  const { t } = useTranslation("auth");

  const navList: NavigationLinkType[] = [
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
  ];

  return {
    navigationList: navList
  };
}
