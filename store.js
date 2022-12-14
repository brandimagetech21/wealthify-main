import { configureStore } from "@reduxjs/toolkit";
import assessmentReducer from "./features/assessment/assessmentSlice";
export const store = configureStore({
  reducer: {
    assessment: assessmentReducer,
  },
});
