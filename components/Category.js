import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Category({ iconName, color }) {
  //
  return (
    <View style={[styles.item, { backgroundColor: color }]}>
      <FontAwesome5 name={iconName} size={25} color={"#ffffff"} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
