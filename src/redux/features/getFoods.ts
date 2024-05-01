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
    getSingleFood: builder.query({
      query: (id) => `/foods/${parseInt(id)}`,
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
    updateFood: builder.mutation({
      query: (data) => ({
        url: `/foods/${data.id}`,
        method: "PUT",
        body: {
          name: data.name,
          price: data.price,
          category: data.category,
          description: data.description,
          image: data.image,
        },
      }),
      invalidatesTags: ["Food"],
    }),
  }),
});

export const {
  useGetAllFoodQuery,
  useDeleteFoodMutation,
  useAddFoodMutation,
  useUpdateFoodMutation,
  useGetSingleFoodQuery,
} = getFoods;
