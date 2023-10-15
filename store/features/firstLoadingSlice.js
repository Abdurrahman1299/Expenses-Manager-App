import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const firstLoadingSlice = createSlice({
  name: "firstLoading",
  initialState: {
    value: true,
  },
  reducers: {
    changeFirstLoading: (state, action) => {
      state.value = action.payload;
      AsyncStorage.setItem("firstLoading", JSON.stringify(state.value));
    },
  },
});

export const { changeFirstLoading } = firstLoadingSlice.actions;
export default firstLoadingSlice.reducer;
