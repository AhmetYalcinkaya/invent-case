import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategoriesSlice";
import detailReducer from "./DetailSlice";
export default configureStore({
  reducer: {
    categories: categoryReducer,
    details: detailReducer,
  },
});
