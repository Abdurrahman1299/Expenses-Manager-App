import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { useSelector } from "react-redux";
import NumberFormat from "./utils/NumberFormat";

export default function Total() {
  //
  const expenses = useSelector((state) => state.expenses.value);
  const incomes = useSelector((state) => state.incomes.value);
  const totalAmount =
    incomes
      .map((item) => parseFloat(item.amount))
      .reduce((pre, cur) => pre + cur, 0) -
    expenses
      .map((item) => parseFloat(item.amount))
      .reduce((pre, cur) => pre + cur, 0);

  return (
    <View style={styles.total}>
      <Text style={styles.totalText}>💰 Total</Text>
      <NumberFormat number={totalAmount} size={26} />
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    color: COLORS.l,
  },
});
