import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  setToExpenses,
  setToIncomes,
} from "../store/features/currentSectionSlice";

export default function ToggleButtons() {
  //
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.currentSection.value);
  //

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(setToExpenses())}>
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
      <Pressable onPress={() => dispatch(setToIncomes())}>
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
