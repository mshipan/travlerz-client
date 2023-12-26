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
    getPackageById: builder.query({
      query: (id) => `/package/${id}`,
    }),
    getAllDestinations: builder.query({
      query: () => "/destinations",
    }),
    getDestinationById: builder.query({
      query: (id) => `/destination/${id}`,
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
  useGetPackageByIdQuery,
  useGetAllDestinationsQuery,
  useGetDestinationByIdQuery,
  useGetAllReviewsQuery,
  useGetAllGuidesQuery,
} = baseApi;

export default baseApi;
