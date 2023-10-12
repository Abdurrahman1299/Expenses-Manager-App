import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

export default function NumberFormat({ number, size, weight }) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return (
    <View>
      <Text
        style={[
          styles.text,
          { fontSize: size, fontWeight: weight },
          number < 0 && { color: COLORS.r },
        ]}
      >
        {formatted}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.l,
  },
});
