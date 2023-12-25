import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_baseApi,
  }),
  endpoints: (builder) => ({
    getAllPackages: builder.query({
      query: () => "/packages",
    }),
    getAllDestinations: builder.query({
      query: () => "/destinations",
    }),
    getAllReviews: builder.query({
      query: () => "/reviews",
    }),
    getAllGuides: builder.query({
      query: () => "/tour-guides",
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useGetAllDestinationsQuery,
  useGetAllReviewsQuery,
  useGetAllGuidesQuery,
} = baseApi;

export default baseApi;
