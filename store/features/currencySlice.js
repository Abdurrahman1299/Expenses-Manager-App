import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    value: "$",
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.value = action.payload;
      AsyncStorage.setItem("currency", JSON.stringify(action.payload));
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
