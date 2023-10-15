import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import StackNavigator from "./screens/navigators/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" translucent={true} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
