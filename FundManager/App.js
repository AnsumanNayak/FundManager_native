import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import themeColour from "./assets/ThemeColour.json";
import MonthlyTransaction from "./Component/MonthlyTransaction/MonthlyTransaction";
import Member from "./Component/Member/Member";
import Home from "./Component/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddMember from "./Component/Member/AddMember";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', en)

const theme = {
  ...DefaultTheme,
  colors: themeColour.colors,
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Monthly Transaction"
              component={MonthlyTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Member"
              component={Member}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMember"
              component={AddMember}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
