import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const firstLoginSlice = createSlice({
  name: "firstLogin",
  initialState: {
    value: true,
  },
  reducers: {
    setFirstLogin: (state) => {
      state.value = false;
      AsyncStorage.setItem("firstLogin", JSON.stringify(state.value));
    },
  },
});

export const { setFirstLogin } = firstLoginSlice.actions;
export default firstLoginSlice.reducer;
