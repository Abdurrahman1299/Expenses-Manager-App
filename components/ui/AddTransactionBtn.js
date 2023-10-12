import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AddTransactionBtn({
  handleAddTransaction,
  amount,
  currentSection,
  selectedId,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        amount &&
          ((currentSection === "expenses" && selectedId.startsWith("e")) ||
            (currentSection === "incomes" && selectedId.startsWith("i"))) && {
            zIndex: 9,
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
    zIndex: -1,
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
