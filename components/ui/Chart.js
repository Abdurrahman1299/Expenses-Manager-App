import { StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import AddNew from "../utils/AddNew";
import Pie from "./Pie";

export default function Chart({
  modalVisible,
  currentSection,
  accuExpenses,
  accuIncomes,
  totalExpenses,
  totalIncomes,
}) {
  return (
    <View style={styles.container}>
      <Pie
        currentSection={currentSection}
        accuExpenses={accuExpenses}
        accuIncomes={accuIncomes}
        totalExpenses={totalExpenses}
        totalIncomes={totalIncomes}
      />
      <AddNew modalVisible={modalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.d,
    height: 280,
    width: "90%",
    borderRadius: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
