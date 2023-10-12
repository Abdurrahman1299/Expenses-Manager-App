import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CurrencyScreen from "./screens/CurrencyScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import { COLORS } from "./constants/colors";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPreview from "./screens/CategoryPreview";
//
const Drawer = createDrawerNavigator();
const drawerProps = {
  headerTransparent: true,
  headerTitle: "",
  drawerActiveBackgroundColor: COLORS.e,
  drawerActiveTintColor: COLORS.l,
  drawerInactiveTintColor: COLORS.b,
  headerTintColor: COLORS.l,
  drawerContentContainerStyle: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  drawerType: "back",
  swipeMinDistance: 20,
  swipeEdgeWidth: 100,
  swipeEnabled: true,
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={drawerProps}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={focused ? COLORS.e : COLORS.b}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              size={size}
              color={focused ? COLORS.e : COLORS.b}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
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

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" translucent={true} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={stackProps}>
          <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Preview" component={CategoryPreview} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
