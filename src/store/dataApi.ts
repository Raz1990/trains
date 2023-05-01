import { ApiDataType, RouteEndpoints, TimeTableType } from "@/app/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["data"],
  endpoints: (builder) => ({
    getData: builder.query<
      ApiDataType,
      { station: RouteEndpoints; type: TimeTableType }
    >({
      query: ({ station, type }) => `${station}?type=${type}`,
      providesTags: ["data"],
    }),
  }),
});
