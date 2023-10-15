import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";

export default function ContinueBtn({ handleContinue }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={handleContinue}>
      <Text style={styles.btnText}>Continue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.b,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 18,
    alignSelf: "center",
    position: "absolute",
    bottom: 25,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
