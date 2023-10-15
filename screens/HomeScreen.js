import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import SemiCircle from "../components/ui/SemiCircle";
import TransactionsList from "../components/TransactionsList";
import { COLORS } from "../constants/colors";
import Chart from "../components/ui/Chart";
import TotalSection from "../components/TotalSection";
import ToggleButtons from "../components/ToggleButtons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { updateExpenses } from "../store/features/expensesSlice";
import { updateIncomes } from "../store/features/incomesSlice";

export default function HomeScreen() {
  //
  const expenses = useSelector((state) => state.expenses.value);
  const incomes = useSelector((state) => state.incomes.value);
  //
  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const storedEspenses = await AsyncStorage.getItem("expenses");
        if (storedEspenses) {
          dispatch(updateExpenses(JSON.parse(storedEspenses)));
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    loadExpenses();
    const loadIncomes = async () => {
      try {
        const storedEspenses = await AsyncStorage.getItem("incomes");
        if (storedEspenses) {
          dispatch(updateIncomes(JSON.parse(storedEspenses)));
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    loadIncomes();
  }, [expenses.length || incomes.length]);
  //
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  //
  const accuExpenses = expenses.reduce((acc, cur) => {
    const existingItem = acc.find((item) => item.title === cur.title);
    if (existingItem) {
      existingItem.amount = +existingItem.amount + +cur.amount;
    } else {
      acc.push({
        title: cur.title,
        amount: cur.amount,
        color: cur.color,
        iconName: cur.iconName,
      });
    }
    return acc;
  }, []);
  //
  const accuIncomes = incomes.reduce((acc, cur) => {
    const existingItem = acc.find((item) => item.title === cur.title);
    if (existingItem) {
      existingItem.amount = +existingItem.amount + +cur.amount;
    } else {
      acc.push({
        title: cur.title,
        amount: cur.amount,
        color: cur.color,
        iconName: cur.iconName,
      });
    }
    return acc;
  }, []);
  //
  const totalExpenses = accuExpenses
    .map((item) => parseFloat(item.amount))
    .reduce((pre, cur) => pre + cur, 0);

  const totalIncomes = accuIncomes
    .map((item) => parseFloat(item.amount))
    .reduce((pre, cur) => pre + cur, 0);
  //
  const shareableData = {
    accuExpenses,
    accuIncomes,
    totalExpenses,
    totalIncomes,
  };
  return (
    <View style={styles.container}>
      <SemiCircle />
      <TotalSection />
      <ToggleButtons />
      <Chart shareableData={shareableData} />
      <TransactionsList shareableData={shareableData} isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 40,
    alignItems: "center",
  },
});
