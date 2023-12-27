import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_baseApi,
  }),
  tagTypes: [
    "Packages",
    "Destinations",
    "Reviews",
    "Guides",
    "Bookings",
    "Users",
  ],
  endpoints: (builder) => ({
    // packages
    getAllPackages: builder.query({
      query: () => "/packages",
      providesTags: ["Packages"],
    }),
    getPackageById: builder.query({
      query: (id) => `/package/${id}`,
      invalidatesTags: ["Packages"],
    }),
    addPackage: builder.mutation({
      query: (data) => ({
        url: "/packages",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Packages"],
    }),
    //destinations
    getAllDestinations: builder.query({
      query: () => "/destinations",
      providesTags: ["Destinations"],
    }),
    getDestinationById: builder.query({
      query: (id) => `/destination/${id}`,
      invalidatesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (data) => ({
        url: "/destinations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Destinations"],
    }),
    //reviews
    getAllReviews: builder.query({
      query: () => "/reviews",
      providesTags: ["Reviews"],
    }),
    //guides
    getAllGuides: builder.query({
      query: () => "/tour-guides",
      providesTags: ["Guides"],
    }),
    //bookings
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
    //users
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useGetPackageByIdQuery,
  useAddPackageMutation,
  useGetAllDestinationsQuery,
  useGetDestinationByIdQuery,
  useAddDestinationMutation,
  useGetAllReviewsQuery,
  useGetAllGuidesQuery,
  useGetAllBookingsQuery,
  useBookTourMutation,
  useGetAllUsersQuery,
} = baseApi;

export default baseApi;
