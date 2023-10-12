import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function SemiCircle() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: COLORS.c,
    width: 400,
    height: 170,
    zIndex: -1,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
});
