import { FC, useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import cn from "classnames";

import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

import { AccordionProgress } from "src/features";
import { CategoryLinkType, CategoryNavigation } from "./ui";

import "./CourseBlockLayout.scss";
import { AppRoutes } from "src/app/routing/appRoutes";

interface CategoriesNavigation {
  items: CategoryLinkType[];
  completed: number;
}

const data: CategoryLinkType[] = [
  {
    id: "1",
    type: "video",
    href: "#",
    title: "Lorem ipsum",
    completed: false
  },
  {
    id: "2",
    type: "quiz",
    href: "#",
    title: "Lorem ipsum",
    completed: true
  },
  {
    id: "3",
    type: "file",
    href: "#",
    title: "Lorem ipsum",
    completed: false
  },
  {
    id: "4",
    type: "video",
    href: "#",
    title: "Lorem ipsum",
    completed: false
  }
];

const CourseLayout: FC = () => {
  const LSMenuKey = "student-collapsed-menu";
  const { id } = useParams<{ id: string }>();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(localStorage.getItem(LSMenuKey) === "true");
  const [expandedObj, setExpandedObj] = useState<Record<string, boolean>>({});

  const [navigation, setNavigation] = useState<CategoriesNavigation[]>([]);

  const getCompletedCountCategories = (arr: CategoryLinkType[]): number => {
    return arr.reduce((acc, item) => acc + (item.completed ? 1 : 0), 0);
  };

  useEffect(() => {
    setNavigation([
      {
        items: data,
        completed: getCompletedCountCategories(data)
      }
    ]);
    fillExpandedObj();
  }, []);

  const arr = [false];

  function fillExpandedObj(): void {
    const obj: Record<string, boolean> = {};
    arr.forEach((item, index) => (obj[index] = item));
    setExpandedObj(obj);
  }

  function collapseAll(): void {
    const obj: Record<string, boolean> = {};
    arr.forEach((_, index) => (obj[index] = false));
    setExpandedObj(obj);
  }

  function onOpenAccordion(key: string, value: boolean): void {
    setExpandedObj((prevState) => ({
      ...prevState,
      [key]: value
    }));
  }

  function onToggleNavigation(): void {
    const isCollapsed = !isOpenMenu;
    setIsOpenMenu(isCollapsed);
    localStorage.setItem(LSMenuKey, isCollapsed.toString());
    if (isOpenMenu) {
      collapseAll();
    }
  }

  // useEffect(() => {
  //   fillExpandedObj();
  // }, [open]);

  return (
    <Box className={cn("course-layout", { "open-navigation": isOpenMenu })}>
      <Box component="aside" className={cn("collapsed-navigation", { expanded: isOpenMenu })}>
        <Box mb="10px">
          <Button
            variant="black-text"
            className={cn("collapsed-navigation__toggler", { active: isOpenMenu })}
            onClick={onToggleNavigation}
          >
            <Typography variant="caption" className="collapsed-navigation__toggler-text">
              Курс по створенню курсів від 0 до ПРО
            </Typography>
            <ArrowForwardIosIcon className="collapsed-navigation__toggler-icon" />
          </Button>
        </Box>
        {Object.keys(expandedObj).length ? (
          <Stack direction="column" gap="10px" position="relative">
            {Object.entries(expandedObj).map((item, index) => (
              <AccordionProgress
                key={index}
                open={item[1]}
                onChange={(_, value) => onOpenAccordion(item[0], value)}
                heading="Lorem ipsum dolor sit amet"
                number={index + 1}
                progress={{
                  complete: navigation[index].completed,
                  total: navigation[index].items.length
                }}
                className={cn({ squeeze: !isOpenMenu })}
              >
                <CategoryNavigation items={navigation[index].items} />
              </AccordionProgress>
            ))}
            <Button
              to={`${AppRoutes.student.courseSingle}/${id}/certificate`}
              component={Link}
              variant="contained"
              className="collapsed-navigation__toggler-link"
            >
              <LocalActivityIcon />
              <Typography variant="caption" className="collapsed-navigation__toggler-text">
                Сертифікат
              </Typography>
            </Button>
            <Button className="collapsed-navigation__hidden-toggler" onClick={onToggleNavigation} />
          </Stack>
        ) : null}
      </Box>
      <Box component="section" className="course-layout__body">
        <Outlet />
      </Box>
    </Box>
  );
};

export default CourseLayout;
