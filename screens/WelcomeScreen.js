import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../constants/colors";
import image from "../assets/icon.png";
import { useDispatch } from "react-redux";
import { setFirstLogin } from "../store/features/firstLoginSlice";
import ContinueBtn from "../components/ui/ContinueBtn";

export default function WelcomeScreen({ navigation }) {
  //
  const dispatch = useDispatch();

  //
  function handleContinue() {
    navigation.navigate("HomeScreen");
    dispatch(setFirstLogin());
  }
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text style={styles.header}>Welcome to Expenses Manager!</Text>
      <Text style={styles.reg}>
        It is an application designed to track all you expenses and income fast
        and easily
      </Text>
      <ContinueBtn handleContinue={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },
  img: { width: 200, height: 200, marginTop: 150 },
  header: {
    fontSize: 22,
    color: COLORS.b,
    marginBottom: 20,
    fontWeight: "bold",
  },
  reg: {
    fontSize: 18,
    color: COLORS.l,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: COLORS.b,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 18,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
