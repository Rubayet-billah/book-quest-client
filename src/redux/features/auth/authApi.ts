import { apiSlice } from "../../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: object) => ({
        url: "/auth/register",
        body: data,
        method: "POST",
      }),
    }),
    loginUser: builder.mutation({
      query: (data: object) => ({
        url: "/auth/login",
        body: data,
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: (email: string) => ({
        url: `auth/${email}`,
      }),
      providesTags: ["Wishlist"],
    }),
    wishlistBook: builder.mutation({
      query: (data: object) => ({
        url: "/auth/wishlist",
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useWishlistBookMutation,
} = authApi;
