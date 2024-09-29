export type MockCourse = {
  id: string;
  title: string;
  image: string;
  progress: number;
};

export const myCourses: MockCourse[] = [
  {
    id: "1",
    title: "How to sell anything online 1",
    image: "/assets/temp-course-image2.png",
    progress: 40,
  },
  {
    id: "2",
    title: "How to sell anything online 2",
    image: "/assets/temp-course-image2.png",
    progress: 100,
  },
];
