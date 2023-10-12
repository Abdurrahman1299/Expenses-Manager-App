import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function GobackBtn({ handleGoback }) {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={handleGoback}>
      <FontAwesome5 name="arrow-left" size={16} color={COLORS.l} />
      <Text style={{ fontSize: 18, color: COLORS.l, marginLeft: 10 }}>
        Back
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    left: 30,
    top: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
