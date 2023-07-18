import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import bookSlice from "./features/book/bookSlice";
import authSlice from "./features/auth/authSlice";
import filterSlice from "./features/filter/filterSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    auth: authSlice,
    filter: filterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
