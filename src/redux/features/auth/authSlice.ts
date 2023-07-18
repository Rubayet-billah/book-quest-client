/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuth {
  email: string | undefined;
  accessToken: string | undefined;
  wishlist?: string[];
}

export interface IAuthState {
  user: IAuth;
  loading: boolean;
}

const initialState: IAuthState = {
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
    setUser: (state, action: PayloadAction<IAuth>) => {
      state.user.email = action.payload.email;
      state.user.accessToken = action.payload.accessToken;
      state.user.wishlist = action.payload.wishlist;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user.email = undefined;
      state.user.accessToken = undefined;
      localStorage.clear();
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading, removeUser } = authSlice.actions;
export default authSlice.reducer;
