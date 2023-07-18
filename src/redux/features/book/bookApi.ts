import { apiSlice } from "../../api/apiSlice";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
      }),
      providesTags: ["Book"],
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
      invalidatesTags: ["Book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        body: data,
        method: "PATCH",
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
