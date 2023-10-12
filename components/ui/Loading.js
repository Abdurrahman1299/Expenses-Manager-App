import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={COLORS.l} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },
});
