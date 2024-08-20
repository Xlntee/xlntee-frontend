import { CourseStatus } from "src/shared/config/CourseStatus";

export type MockCourse = {
  id: number;
  title: string;
  status: string;
  updateTime: string;
  imgSrc: string;
};

export const myCourses: MockCourse[] = [
  {
    id: 1,
    title: "How to sell anything online",
    status: CourseStatus.MODERATION,
    updateTime: "23.11.2022",
    imgSrc: "/assets/temp-course-image2.png",
  },
  {
    id: 2,
    title: "HIGHLOAD SOFTWARE ARCHITECTURE for beginners, how to become a professional How to sell anything online",
    status: CourseStatus.DELETED,
    updateTime: "13.12.2024",
    imgSrc: "/assets/temp-course-image.png",
  },
  {
    id: 3,
    title: "Пітон для початківців від 0 до 1000 за 3 місяця без знань чи навичків",
    status: CourseStatus.PUBLISHED,
    updateTime: "10.10.2023",
    imgSrc: "/assets/temp-course-image1.png",
  },
  {
    id: 4,
    title: "Назва курсу",
    status: CourseStatus.DRAFT,
    updateTime: "23.11.2022",
    imgSrc: "",
  },
];
