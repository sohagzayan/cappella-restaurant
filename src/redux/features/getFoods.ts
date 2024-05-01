import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getFoods = createApi({
  reducerPath: "foods",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6630d643c92f351c03db44cd.mockapi.io/api/v1",
  }),
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    getAllFood: builder.query({
      query: () => `/foods`,
      providesTags: ["Food"],
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `/foods/${parseInt(id)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Food"],
    }),
    addFood: builder.mutation({
      query: (data) => ({
        url: `/foods`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Food"],
    }),
  }),
});

export const { useGetAllFoodQuery, useDeleteFoodMutation, useAddFoodMutation } =
  getFoods;
