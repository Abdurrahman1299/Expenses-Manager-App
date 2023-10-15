import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import expensesReducer from "./features/expensesSlice";
import incomeReducer from "./features/incomesSlice";
import currentSectionSlice from "./features/currentSectionSlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  expenses: expensesReducer,
  incomes: incomeReducer,
  currentSection: currentSectionSlice,
});

export default rootReducer;
