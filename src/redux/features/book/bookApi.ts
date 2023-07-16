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
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation } =
  bookApi;
