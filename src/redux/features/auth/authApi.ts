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
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
