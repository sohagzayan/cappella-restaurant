import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trashApi = createApi({
  reducerPath: "trash",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6630d643c92f351c03db44cd.mockapi.io/api/v1",
  }),
  tagTypes: ["trash"],
  endpoints: (builder) => ({
    addToTrash: builder.mutation({
      query: (data) => ({
        url: `/trash`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["trash"],
    }),

    getFoodFromTrash: builder.query({
      query: () => `/trash`,
      providesTags: ["trash"],
    }),

    removeFormTrash: builder.mutation({
      query: (id) => ({
        url: `/trash/${parseInt(id)}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trash"],
    }),
  }),
});

export const {
  useAddToTrashMutation,
  useGetFoodFromTrashQuery,
  useRemoveFormTrashMutation,
} = trashApi;
