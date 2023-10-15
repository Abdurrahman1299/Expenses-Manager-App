import { createDrawerNavigator } from "@react-navigation/drawer";
import CurrencyScreen from "../CurrencyScreen";
import HomeScreen from "../HomeScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

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
//

export default function DrawerNavigator() {
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
