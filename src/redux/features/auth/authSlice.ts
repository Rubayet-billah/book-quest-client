/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: {
    email: string | undefined;
    accessToken: string | undefined;
  };
  loading: boolean;
}

const initialState: IAuth = {
  user: {
    email: undefined,
    accessToken: undefined,
  },
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction) => {
      state.user.email = action.payload.email;
      state.user.accessToken = action.payload.accessToken;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    setLoading: (state, action: PayloadAction) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
