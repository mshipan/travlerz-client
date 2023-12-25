import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPackages: [],
};
const allPackagesSlice = createSlice({
  name: "allPackagesSlice",
  initialState,
  reducers: {},
});

export default allPackagesSlice.reducer;
