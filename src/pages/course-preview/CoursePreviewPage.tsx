import { useParams } from "react-router-dom";
import { useGetCourseQuery } from "src/entities/course/api/coursesApiSlice";
import { SectionCoursePreviewContent, SectionCoursePreviewHeader } from "src/widgets/sections";
import useTitle from "src/hooks/useTitle/useTitle";
import { PageProps } from "pages/type";

const CoursePreviewPage = ({ title }: PageProps) => {
  useTitle(title);

  const { courseId } = useParams<{ courseId: string }>();

  const { data, isLoading, error } = useGetCourseQuery(courseId!, {
    skip: !courseId,
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
  //
  return (
    <>
      <SectionCoursePreviewHeader courseData={data} />
      <SectionCoursePreviewContent courseData={data} />
      <button onClick={() => console.log(data)}>click</button>
    </>
  );
};

export default CoursePreviewPage;
