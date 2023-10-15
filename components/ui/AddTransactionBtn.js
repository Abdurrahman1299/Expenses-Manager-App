import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function AddTransactionBtn({
  handleAddTransaction,
  amount,
  selectedId,
}) {
  //
  const currentSection = useSelector((state) => state.currentSection.value);
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        amount &&
          ((currentSection === "expenses" && selectedId.startsWith("e")) ||
            (currentSection === "incomes" && selectedId.startsWith("i"))) && {
            opacity: 1,
          },
      ]}
      onPress={handleAddTransaction}
    >
      <Text style={styles.btnTitle}>
        <FontAwesome5 name="check" size={20} color={COLORS.or} />
        {`  `}Add
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "flex-end",
    position: "absolute",
    right: 10,
    bottom: 10,
    opacity: 0.2,
  },
  btnTitle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: SIZES.reg + 2,
    color: COLORS.l,
    textAlign: "center",
    backgroundColor: COLORS.gg,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});
