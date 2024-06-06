import { useParams } from "react-router-dom";
import { useGetCourseQuery } from "src/entities/course/api/coursesApiSlice";
import CoursePreviewContent from "src/widgets/course-preview-content/CoursePreviewContent";
import CoursePreviewHeader from "src/widgets/course-preview-header/CoursePreviewHeader";
import Page from "src/widgets/page/Page";

const CoursePreviewPage = () => {
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
    <Page>
      <CoursePreviewHeader courseData={data} />
      <CoursePreviewContent courseData={data} />
      <button onClick={() => console.log(data)}>click</button>
    </Page>
  );
};

export default CoursePreviewPage;
