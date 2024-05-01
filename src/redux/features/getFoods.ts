import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getFoods = createApi({
  reducerPath: "food",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62f899fe3eab3503d1d873c7.mockapi.io",
  }),
  endpoints: (builder) => ({
    // get all product
    getAllFood: builder.query({
      query: () => `/Crud`,
    }),
  }),
});

export const { useGetAllFoodQuery } = getFoods;
