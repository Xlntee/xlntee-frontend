import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";

import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { AccordionProgress } from "src/features";

import "./CourseBlockLayout.scss";

const CourseLayout = () => {
  const LSMenuKey = "student-collapsed-menu";
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(localStorage.getItem(LSMenuKey) === "true");
  const [expandedObj, setExpandedObj] = useState<Record<string, boolean>>({});

  //test data
  const arr = [false, false];

  function fillExpandedObj() {
    const obj: Record<string, boolean> = {};
    arr.forEach((item, index) => (obj[index] = item));
    setExpandedObj(obj);
  }

  function collapseAll() {
    const obj: Record<string, boolean> = {};
    arr.forEach((_, index) => (obj[index] = false));
    setExpandedObj(obj);
  }

  function onOpenAccordion(key: string, value: boolean) {
    setExpandedObj((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function onToggleNavigation() {
    const isCollapsed = !isOpenMenu;
    setIsOpenMenu(isCollapsed);
    localStorage.setItem(LSMenuKey, isCollapsed.toString());
    if (isOpenMenu) {
      collapseAll();
    }
  }

  useEffect(() => {
    fillExpandedObj();
  }, [open]);

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
        <Stack direction="column" gap="10px" position="relative">
          {Object.entries(expandedObj).map((item, index) => (
            <AccordionProgress
              key={index}
              open={item[1]}
              onChange={(_, value) => onOpenAccordion(item[0], value)}
              heading="Lorem ipsum dolor sit amet"
              number={index + 1}
              progress={{
                complete: 2,
                total: 4,
              }}
              className={cn({ squeeze: !isOpenMenu })}
            >
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla delectus quas molestiae cum corporis ex
                velit unde consectetur odio fugit. Illum tenetur, labore earum ducimus rerum enim. Odio facere animi
                fuga non placeat nisi quasi provident modi nam, tempore eligendi minima ipsa nostrum, laudantium veniam
                sapiente ut soluta mollitia pariatur?
              </Box>
            </AccordionProgress>
          ))}
          <Button className="collapsed-navigation__hidden-toggler" onClick={onToggleNavigation}></Button>
        </Stack>
      </Box>
      <Box component="section" className="course-layout__body">
        <Outlet />
      </Box>
    </Box>
  );
};

export default CourseLayout;
