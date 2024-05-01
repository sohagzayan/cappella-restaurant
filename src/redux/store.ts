import { Middleware, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { getFoods } from "./features/getFoods";
import { setupListeners } from "@reduxjs/toolkit/query";
import { trashApi } from "./features/trash";
import { draftApi } from "./features/draft";

export const store = configureStore({
  reducer: {
    [getFoods.reducerPath]: getFoods.reducer,
    [trashApi.reducerPath]: trashApi.reducer,
    [draftApi.reducerPath]: draftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      getFoods.middleware,
      trashApi.middleware,
      draftApi.middleware,
    ] as Middleware[]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
