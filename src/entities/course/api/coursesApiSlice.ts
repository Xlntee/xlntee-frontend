import { PaginatedResponse } from "src/shared/api/pagination";
import { apiSlice } from "../../../app/api/apiSlice";
import { Course, CourseSummary } from "../model/course";
import { CoursesQueryParams } from "./requestModel";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query<PaginatedResponse<CourseSummary>, CoursesQueryParams>({
      query: (params) => ({
        url: "/courses",
        params
      })
    }),
    getTopCourses: builder.query<CourseSummary[], number>({
      query: (limit) => ({
        url: "/courses/top",
        params: { limit }
      })
    }),
    getCourse: builder.query<Course, string>({
      query: (id) => ({
        url: `/courses/${id}`
      })
    })
  })
});

export const { useGetCoursesQuery, useGetTopCoursesQuery, useGetCourseQuery } = courseApiSlice;
