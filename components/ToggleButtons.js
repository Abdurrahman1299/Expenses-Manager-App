import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function ToggleButtons({
  expensesSection,
  incomesSection,
  currentSection,
}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => expensesSection()}>
        <Text
          style={[
            styles.text,
            currentSection === "expenses" && {
              borderBottomWidth: 2,
            },
          ]}
        >
          Expenses
        </Text>
      </Pressable>
      <Pressable onPress={() => incomesSection()}>
        <Text
          style={[
            styles.text,
            currentSection === "incomes" && {
              borderBottomWidth: 2,
            },
          ]}
        >
          Incomes
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    width: "100%",
  },
  text: {
    color: COLORS.l,
    fontSize: 18,
    textTransform: "uppercase",
    paddingBottom: 2,
    paddingHorizontal: 12,
    borderBottomColor: COLORS.l,
  },
});
