import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import themeColour from './assets/ThemeColour.json';
import MonthlyTransaction from './Component/MonthlyTransaction/MonthlyTransaction';
import Member from './Component/Member/Member';
import Home from './Component/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
  ...DefaultTheme,
  colors: themeColour.colors,
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}/>
          <Stack.Screen 
            name="Monthly Transaction"
            component={MonthlyTransaction} 
            options={{ headerShown: false }}/>
          <Stack.Screen 
            name="Member"
            component={Member} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
