import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
    }),
    getBook: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = bookApi;
