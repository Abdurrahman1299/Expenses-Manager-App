import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/features/expensesSlice";
import Loading from "./ui/Loading";
import { removeIncome } from "../store/features/incomesSlice";
import Transaction from "./Transaction";

export default function TransactionsList({
  isLoading,
  currentSection,
  accuExpenses,
  accuIncomes,
  totalExpenses,
  totalIncomes,
}) {
  //
  const dispatch = useDispatch();
  //
  function handleRemoveTransaction(id) {
    if (currentSection === "expenses") {
      dispatch(removeExpense(id));
    } else if (currentSection === "incomes") {
      dispatch(removeIncome(id));
    }
  }
  return (
    <>
      {!isLoading ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          {(currentSection === "expenses" ? accuExpenses : accuIncomes).map(
            (item) => (
              <View key={item.title + item.iconName}>
                <Transaction
                  item={item}
                  currentSection={currentSection}
                  handleRemoveTransaction={handleRemoveTransaction}
                  totalAmount={
                    currentSection === "expenses" ? totalExpenses : totalIncomes
                  }
                />
              </View>
            )
          )}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginVertical: 4,
  },
});
