import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import expensesReducer from "./features/expensesSlice";
import incomeReducer from "./features/incomesSlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  expenses: expensesReducer,
  incomes: incomeReducer,
});

export default rootReducer;
