import { FC } from "react";
import { useParams } from "react-router-dom";

import { Stack } from "@mui/material";

import { useGetCourseQuery } from "src/entities/course/api/coursesApiSlice";
import {
  SectionCourseInfo,
  SectionCourseHero,
  SectionCourseStructure,
  SectionCourseDescription,
  SectionCourseAbout
} from "src/widgets/sections/sections-teacher-preview";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

import { Difficulty, Language } from "src/entities/course/model";

const CoursePreviewPage: FC<PageProps> = ({ title }) => {
  useTitle(title);

  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGetCourseQuery(id!, {
    skip: !id
  });

  //тимчасово, щоб ts не жалувався на undefined
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading course</div>;
  }

  if (!data) {
    return <div>No course data available</div>;
  }

  return (
    <>
      <Stack direction="column" gap="50px" py="40px">
        <SectionCourseHero
          preview="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          nickname="Nickname"
          title="Technology Business, how to become a professional in this topic."
          description="Description of the course Description of the course Description of the course Description of the course"
          discount={24}
          price={1999}
          rating={4.8}
          language={Language.english}
          level={Difficulty.all}
          generateCertificate={false}
          reviewCount={4.8}
        />
        <SectionCourseInfo />
        <SectionCourseStructure />
        <SectionCourseDescription courseDescription={data.landingSetting.description} />
        <SectionCourseAbout
          name={"Name Surname"}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit soluta impedit dolorum voluptatem ducimus incidunt sed tempora consequuntur, omnis, iusto odit saepe enim excepturi cum! Voluptatum veniam illo velit?"
          skills={[
            "Senior Business Analytic",
            "MBA",
            "Junior SEO manager",
            "Middle Product Manager",
            "Junior JS developer"
          ]}
        />
      </Stack>

      <button onClick={() => console.log(data)}>click</button>
    </>
  );
};

export default CoursePreviewPage;
