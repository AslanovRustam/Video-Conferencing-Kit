import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: { name: "Qwe" },
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
