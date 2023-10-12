import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { useSelector } from "react-redux";
import TransactionDetails from "../components/TransactionDetails";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CategoryPreview({ navigation, route }) {
  //
  const expenses = useSelector((state) => state.expenses.value);
  const incomes = useSelector((state) => state.incomes.value);
  //
  const item = route.params.item;
  const headTitle = item.title;
  const currentSection = route.params.currentSection;

  useEffect(() => {
    const updateTitle = () =>
      navigation.setOptions({
        headerTitle: headTitle + ` ${currentSection}`,
      });
    updateTitle();
  }, [navigation]);
  //
  const data = (currentSection === "expenses" ? expenses : incomes).filter(
    (item) => item.title === headTitle
  );
  //

  const total = data
    .map((item) => parseFloat(item.amount))
    .reduce((pre, cur) => pre + cur, 0);
  //

  return (
    <View style={styles.container}>
      <View style={styles.totalCat}>
        <FontAwesome5 name={item.iconName} size={50} color={"#ffffff"} />
        <Text style={styles.text}>
          Total {currentSection} in {item.title}:{" "}
          <Text style={{ fontWeight: "bold", color: COLORS.or }}>${total}</Text>
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.amount * Math.random()}
        data={data}
        style={{ width: "90%" }}
        renderItem={({ item }) => (
          <TransactionDetails item={item} currentSection={currentSection} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: COLORS.l,
    borderTopWidth: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
    paddingTop: 10,
  },
  totalCat: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: COLORS.l,
  },
});
