import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISession } from "../types/session";

const initialState: ISession = {
  link: "",
  owner: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    createSession: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
      state.owner = true;
    },
  },
});

export const { createSession } = sessionSlice.actions;
export default sessionSlice.reducer;
