import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { COLORS } from "../constants/colors";
import { useSelector } from "react-redux";
import TransactionDetails from "../components/TransactionDetails";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CategoryPreview({ navigation, route }) {
  //
  const expenses = useSelector((state) => state.expenses.value);
  const incomes = useSelector((state) => state.incomes.value);
  const currency = useSelector((state) => state.currency.value);
  const currentSection = useSelector((state) => state.currentSection.value);
  //
  const item = route.params.item;
  const headTitle = item.title;

  useEffect(() => {
    const updateTitle = () =>
      navigation.setOptions({
        headerTitle: headTitle + ` ${currentSection}`,
      });
    updateTitle();
  }, [navigation]);
  //
  const data = (currentSection === "expenses" ? expenses : incomes).filter(
    (i) => i.title === headTitle
  );
  //

  const total = data
    .map((i) => parseFloat(i.amount))
    .reduce((pre, cur) => pre + cur, 0);
  //

  return (
    <View style={styles.container}>
      <View style={styles.totalCat}>
        <FontAwesome5 name={item.iconName} size={50} color={COLORS.l} />
        <Text style={styles.text}>
          Total {currentSection} in {item.title}:{" "}
          <Text style={{ fontWeight: "bold", color: COLORS.or }}>
            {currency} {total}
          </Text>
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
    borderTopColor: COLORS.e,
    borderTopWidth: 1,
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
