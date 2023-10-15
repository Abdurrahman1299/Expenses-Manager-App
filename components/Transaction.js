import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";
import { useSelector } from "react-redux";
import { COLORS, SIZES } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Transaction({ item, totalAmount }) {
  //
  const navigation = useNavigation();
  const currency = useSelector((state) => state.currency.value);
  const currentSection = useSelector((state) => state.currentSection.value);

  //

  function handleOpenPreview(item) {
    navigation.navigate("Preview", { item, currentSection });
  }

  return (
    <Pressable style={styles.item} onPress={() => handleOpenPreview(item)}>
      <Category iconName={item.iconName} color={item.color} />
      <View style={styles.textCont}>
        <Text style={styles.itemPercent}>
          {((item.amount / totalAmount) * 100).toFixed(2)}%
        </Text>
        <Text style={styles.itemAmount}>
          {currency}
          {parseFloat(item.amount).toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: COLORS.d,
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: "100%",
    borderRadius: 12,
    justifyContent: "space-between",
  },
  textCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  itemAmount: {
    fontSize: SIZES.reg,
    color: COLORS.l,
  },
  itemPercent: {
    marginRight: 36,
    fontSize: SIZES.reg,
    color: COLORS.e,
  },
});
