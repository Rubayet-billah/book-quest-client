import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: {
    email: string | undefined;
    accessToken: string | undefined;
  };
}

const initialState: IAuth = {
  user: {
    email: undefined,
    accessToken: undefined,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction) => {
      state.user.email = action.payload.email;
      state.user.accessToken = action.payload.accessToken;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
