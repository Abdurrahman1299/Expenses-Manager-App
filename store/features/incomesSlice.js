import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    value: [],
  },
  reducers: {
    addIncome: (state, action) => {
      state.value.push(action.payload);
      AsyncStorage.setItem("incomes", JSON.stringify(state.value));
    },
    removeIncome: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      AsyncStorage.setItem("incomes", JSON.stringify(state.value));
    },
    updateIncomes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addIncome, removeIncome, updateIncomes } = incomeSlice.actions;
export default incomeSlice.reducer;
