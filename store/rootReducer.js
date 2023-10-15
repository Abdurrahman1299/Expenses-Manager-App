import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import expensesReducer from "./features/expensesSlice";
import incomeReducer from "./features/incomesSlice";
import currentSectionSlice from "./features/currentSectionSlice";
import firstLoginSlice from "./features/firstLoginSlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  expenses: expensesReducer,
  incomes: incomeReducer,
  currentSection: currentSectionSlice,
  setFirstLogin: firstLoginSlice,
});

export default rootReducer;
