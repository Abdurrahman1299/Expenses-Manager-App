import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    value: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.value.push(action.payload);
      AsyncStorage.setItem("expenses", JSON.stringify(state.value));
    },
    removeExpense: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      AsyncStorage.setItem("expenses", JSON.stringify(state.value));
    },
    updateExpenses: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addExpense, removeExpense, updateExpenses } =
  expensesSlice.actions;
export default expensesSlice.reducer;
