import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import bookSlice from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
