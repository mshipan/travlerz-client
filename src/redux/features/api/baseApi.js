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
      providesTags: ["Packages"],
    }),
    addPackage: builder.mutation({
      query: (data) => ({
        url: "/packages",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Packages"],
    }),
    updatePackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/package/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Packages"],
    }),
    deletePackage: builder.mutation({
      query: ({ id }) => ({
        url: `/package/${id}`,
        method: "DELETE",
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
      providesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (data) => ({
        url: "/destinations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: ({ id, data }) => ({
        url: `/destination/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `/destination/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Destinations"],
    }),
    //reviews
    getAllReviews: builder.query({
      query: () => "/reviews",
      providesTags: ["Reviews"],
    }),
    getReviewsByUid: builder.query({
      query: (uid) => `/reviews/${uid}`,
      invalidatesTags: ["Reviews"],
    }),
    //guides
    getAllGuides: builder.query({
      query: () => "/tour-guides",
      providesTags: ["Guides"],
    }),
    addGuide: builder.mutation({
      query: (data) => ({
        url: "/tour-guides",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Guides"],
    }),
    //bookings
    getAllBookings: builder.query({
      query: () => "/bookings",
      providesTags: ["Bookings"],
    }),
    getBookingsByUid: builder.query({
      query: (uid) => `/bookings/${uid}`,
      invalidatesTags: ["Bookings"],
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
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useGetPackageByIdQuery,
  useAddPackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
  useGetAllDestinationsQuery,
  useGetDestinationByIdQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
  useGetAllReviewsQuery,
  useGetReviewsByUidQuery,
  useGetAllGuidesQuery,
  useAddGuideMutation,
  useGetAllBookingsQuery,
  useGetBookingsByUidQuery,
  useBookTourMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = baseApi;

export default baseApi;
