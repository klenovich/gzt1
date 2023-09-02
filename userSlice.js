import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: '' },
  reducers: {
    register: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { register } = userSlice.actions;
export default userSlice.reducer;