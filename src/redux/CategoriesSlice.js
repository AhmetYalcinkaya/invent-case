import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryAsync = createAsyncThunk(
  "category/getCategory",
  async ({ title, year, type }) => {
    const response = await axios(
      `http://www.omdbapi.com/?apikey=a446015f&s=${title}&y=${year}&type=${type}`
    );

    return response.data;
  }
);
export const CategorySlice = createSlice({
  name: "categories",
  initialState: {
    category: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //GET Category
    [getCategoryAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoryAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    },
    [getCategoryAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default CategorySlice.reducer;
