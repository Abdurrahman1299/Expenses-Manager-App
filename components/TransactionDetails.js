import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import DateFormat from "./utils/DateFormat";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/features/expensesSlice";
import { removeIncome } from "../store/features/incomesSlice";

export default function TransactionDetails({ item, currentSection }) {
  //
  const dispatch = useDispatch();

  //
  function handleTransactionRemove(id) {
    if (currentSection === "expenses") {
      dispatch(removeExpense(id));
    } else if (currentSection === "incomes") {
      dispatch(removeIncome(id));
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: item.color + "cc" }]}>
      <View style={{ flex: 1 }}>
        <View style={styles.commentAmount}>
          <Text style={styles.comment}>{item.comment || "No comment"}</Text>
          <Text style={styles.amount}>${item.amount}</Text>
        </View>
        <View style={styles.date}>
          <DateFormat date={item.id} color={COLORS.gg} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.trash}
        onPress={() => handleTransactionRemove(item.id)}
      >
        <Feather name="trash-2" color={COLORS.r} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginVertical: 4,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentAmount: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.d,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  comment: {
    flex: 0.8,
    color: COLORS.l,
  },
  amount: {
    flex: 0.27,
    color: COLORS.l,
    fontWeight: "bold",
  },
  date: {
    paddingVertical: 4,
  },
  trash: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
});
