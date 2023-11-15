import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Icon,
} from "react-native-paper";
import themeColour from "./assets/ThemeColour.json";
import MonthlyTransaction from "./Component/MonthlyTransaction/MonthlyTransaction";
import Member from "./Component/Member/Member";
import Home from "./Component/Home/Home";
import Profile from "./Component/Profile/Profile";
import Fund from "./Component/Fund/Fund";
import AddFund from "./Component/Fund/AddFund";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddMember from "./Component/Member/AddMember";
import { en, registerTranslation } from "react-native-paper-dates";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
registerTranslation("en", en);

const theme = {
  ...DefaultTheme,
  colors: themeColour.colors,
};
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function StackNavigatorHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fund"
        component={Fund}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFund"
        component={AddFund}
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

function StackNavigatorFund() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fund"
        component={Fund}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddFund"
        component={AddFund}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


function StackNavigatorTransaction() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Monthly Transaction"
        component={MonthlyTransaction}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackNavigatorMember() {
  return (
    <Stack.Navigator>
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
  );
}

function StackNavigatorProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="ManageTransaction"
          activeColor="rgb(0, 95, 175)"
          inactiveColor="rgb(110, 86, 118)"
          labeled = "true"
        >
          {/* <Tab.Screen
            name="ManageHome"
            component={StackNavigatorHome}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          /> */}
          <Tab.Screen
            name="ManageFund"
            component={StackNavigatorFund}
            options={{
              tabBarLabel: "Fund",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-cash"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ManageTransaction"
            component={StackNavigatorTransaction}
            options={{
              tabBarLabel: "Transact",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="transfer-up"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ManageMember"
            component={StackNavigatorMember}
            options={{
              tabBarLabel: "Member",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-group"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="ManageProfile"
            component={StackNavigatorProfile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-cog"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
