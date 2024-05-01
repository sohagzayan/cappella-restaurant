import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const draftApi = createApi({
  reducerPath: "draft",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66321847c51e14d6956358f1.mockapi.io",
  }),
  tagTypes: ["draft"],
  endpoints: (builder) => ({
    addToDraft: builder.mutation({
      query: (data) => ({
        url: `/draft`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["draft"],
    }),

    getFoodFromDraft: builder.query({
      query: () => `/draft`,
      providesTags: ["draft"],
    }),
  }),
});

export const { useAddToDraftMutation, useGetFoodFromDraftQuery } = draftApi;
