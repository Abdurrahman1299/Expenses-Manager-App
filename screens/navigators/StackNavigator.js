import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPreview from "../CategoryPreview";
import NewTransactionScreen from "../NewTransactionScreen";
import DrawerNavigator from "../navigators/DrawerNavigator";
import { COLORS } from "../../constants/colors";

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
  return (
    <Stack.Navigator screenOptions={stackProps}>
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
    </Stack.Navigator>
  );
}
