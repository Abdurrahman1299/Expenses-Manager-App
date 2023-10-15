import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/colors";
import AddNew from "../utils/AddNew";
import LinearChart from "./LinearChart";

export default function Chart({ shareableData }) {
  //
  return (
    <View style={styles.container}>
      <LinearChart shareableData={shareableData} />
      <AddNew />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.d,
    height: 120,
    width: "90%",
    borderRadius: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
