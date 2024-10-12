export type MockCourse = {
  id: string;
  image: string;
  title: string;
  date: string;
  price: number;
  newPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  href: string;
};

export const myCourses: MockCourse[] = [
  {
    id: "1",
    image: "/assets/temp-course-image2.png",
    title: "How to sell anything online.",
    date: "14.05.2024",
    price: 1999,
    newPrice: 999,
    discount: 20,
    rating: 2.8,
    reviews: 110,
    href: "#"
  },
  {
    id: "2",
    image: "/assets/temp-course-image2.png",
    title: "How to sell anything online.",
    date: "14.05.2024",
    price: 1999,
    newPrice: 999,
    discount: 20,
    rating: 2.8,
    reviews: 110,
    href: "#"
  }
];
