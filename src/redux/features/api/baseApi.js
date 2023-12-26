import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_baseApi,
  }),
  tagTypes: ["Packages", "Bookings"],
  endpoints: (builder) => ({
    getAllPackages: builder.query({
      query: () => "/packages",
      providesTags: ["Packages"],
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
    getAllBookings: builder.query({
      query: () => "/bookings",
      providesTags: ["Bookings"],
    }),
    bookTour: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bookings"],
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
  useGetAllBookingsQuery,
  useBookTourMutation,
} = baseApi;

export default baseApi;
