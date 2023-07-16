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
  }),
});

export const { useRegisterUserMutation } = authApi;
