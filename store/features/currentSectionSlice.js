import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const currentSectionSlice = createSlice({
  name: "currentSec",
  initialState: {
    value: "expenses",
  },
  reducers: {
    setToExpenses: (state) => {
      state.value = "expenses";
      AsyncStorage.setItem("currentSection", JSON.stringify(state.value));
    },
    setToIncomes: (state) => {
      state.value = "incomes";
      AsyncStorage.setItem("currentSection", JSON.stringify(state.value));
    },
  },
});

export const { setToExpenses, setToIncomes } = currentSectionSlice.actions;
export default currentSectionSlice.reducer;
