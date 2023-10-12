import { StyleSheet, Text, View } from "react-native";

export default function DateFormat({ date }) {
  return (
    <View>
      <Text style={styles.text}>
        {new Date(date).toLocaleDateString("en-UK", {
          minute: "2-digit",
          hour: "2-digit",
          month: "short",
          year: "numeric",
          day: "2-digit",
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: "#c4dcdf",
  },
});
