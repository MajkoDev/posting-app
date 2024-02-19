import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "David Jones" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Michael Williams" },
  { id: "3", name: "Christopher Clark" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
