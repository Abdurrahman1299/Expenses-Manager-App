import { StyleSheet, View } from "react-native";
import React from "react";
import NumberFormat from "../utils/NumberFormat";
import PieChart from "react-native-pie-chart";
import { COLORS } from "../../constants/colors";

const heightWidth = 240;
export default function Pie({
  currentSection,
  accuExpenses,
  accuIncomes,
  totalExpenses,
  totalIncomes,
}) {
  //

  function expensesInfo() {
    let series = [100];
    let sliceColors = [COLORS.g];
    if (accuExpenses.length !== 0) {
      series = accuExpenses.map((item) => item.amount);
      sliceColors = accuExpenses.map((item) => item.color);
    }
    return { series, sliceColors };
  }
  //

  function incomesInfo() {
    let series = [100];
    let sliceColors = [COLORS.g];
    if (accuIncomes.length !== 0) {
      series = accuIncomes.map((item) => item.amount);
      sliceColors = accuIncomes.map((item) => item.color);
    }
    return { series, sliceColors };
  }
  //

  const series =
    currentSection === "expenses"
      ? expensesInfo().series
      : incomesInfo().series;

  const sliceColors =
    currentSection === "expenses"
      ? expensesInfo().sliceColors
      : incomesInfo().sliceColors;

  return (
    <View style={styles.container}>
      <PieChart
        widthAndHeight={heightWidth}
        series={series}
        sliceColor={sliceColors}
        coverRadius={0.7}
      />
      <View style={styles.text}>
        <NumberFormat
          number={currentSection === "expenses" ? totalExpenses : totalIncomes}
          size={22}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    height: heightWidth,
    width: heightWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
