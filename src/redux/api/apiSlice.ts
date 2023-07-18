import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  production => "https://book-quest-server.vercel.app/api/v1"
// development => "http://localhost:5000/api/v1";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Book", "Wishlist"],
  endpoints: () => ({}),
});
