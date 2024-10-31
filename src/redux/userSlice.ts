import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: { name: "" },
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
