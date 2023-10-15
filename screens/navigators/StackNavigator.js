import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPreview from "../CategoryPreview";
import NewTransactionScreen from "../NewTransactionScreen";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { COLORS } from "../../constants/colors";
import WelcomeScreen from "../WelcomeScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//
const Stack = createNativeStackNavigator();
const stackProps = {
  animation: "slide_from_right",
  headerTintColor: COLORS.l,
  headerStyle: {
    backgroundColor: COLORS.bg,
  },
  headerShadowVisible: false,
};
//
export default function StackNavigator() {
  //
  const [firstLogin, setFirstLogin] = useState("");
  useEffect(() => {
    const loadFirstLogin = async () => {
      try {
        const firstEntry = await AsyncStorage.getItem("firstLogin");
        if (firstEntry) {
          setFirstLogin(firstEntry);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadFirstLogin();
  }, []);
  //
  return (
    <Stack.Navigator
      initialRouteName={firstLogin ? "Welcome" : "HomeScreen"}
      screenOptions={stackProps}
    >
      <Stack.Screen
        name="HomeScreen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Preview" component={CategoryPreview} />
      <Stack.Screen
        name="New"
        component={NewTransactionScreen}
        options={{
          headerTitle: "Add Transaction",
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
