import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../../utils/assessmentData";
initialData;
const initialState = {
  ...initialData,
};
const assessementSlice = createSlice({
  name: "assessment",
  initialState,
});

export default assessementSlice.reducer;
