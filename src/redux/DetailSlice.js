import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailAsync = createAsyncThunk(
  "detail/getdetail",
  async (id) => {
    const response = await axios(
      `http://www.omdbapi.com/?apikey=a446015f&i=${id}`
    );
    return response.data;
  }
);
export const DetailSlice = createSlice({
  name: "details",
  initialState: {
    detail: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //GET detail
    [getDetailAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetailAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [getDetailAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default DetailSlice.reducer;
