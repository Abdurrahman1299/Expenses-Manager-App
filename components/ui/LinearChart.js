import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { useSelector } from "react-redux";

export default function LinearChart({ shareableData }) {
  //
  const { accuExpenses, accuIncomes, totalExpenses, totalIncomes } =
    shareableData;
  //
  function Bar(item) {
    return (
      <View
        key={item.title + item.amount.toString()}
        style={[
          styles.item,
          {
            width: `${
              (item.amount /
                (currentSection === "expenses"
                  ? totalExpenses
                  : totalIncomes)) *
                100 +
              "%"
            }`,
            backgroundColor: item.color,
          },
        ]}
      >
        <Text style={styles.textInside}>
          {`${
            (item.amount /
              (currentSection === "expenses" ? totalExpenses : totalIncomes)) *
              100 >
            5
              ? (
                  (item.amount /
                    (currentSection === "expenses"
                      ? totalExpenses
                      : totalIncomes)) *
                  100
                ).toFixed(0) + "%"
              : ""
          }`}
        </Text>
      </View>
    );
  }
  //
  function emptyBar() {
    return (
      <View
        style={[
          styles.item,
          {
            width: "100%",
            backgroundColor: COLORS.e,
          },
        ]}
      >
        <Text style={styles.textInside}>0%</Text>
      </View>
    );
  }
  //
  const currentSection = useSelector((state) => state.currentSection.value);
  return (
    <View style={styles.container}>
      <View style={styles.chartCont}>
        {currentSection === "expenses" && accuExpenses.length !== 0
          ? accuExpenses.map((item) => Bar(item))
          : currentSection === "incomes" && accuIncomes.length !== 0
          ? accuIncomes.map((item) => Bar(item))
          : emptyBar()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  chartCont: {
    width: "94%",
    flexDirection: "row",
    borderRadius: 50,
    overflow: "hidden",
  },
  item: {
    justifyContent: "center",
    height: 25,
  },
  textInside: {
    fontSize: 12,
    color: COLORS.l,
    textAlign: "center",
  },
});
