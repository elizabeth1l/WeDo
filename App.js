import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyToDoScreen from "./screens/MyToDoScreen";
import FriendsScreen from "./screens/FriendsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color="#0782F9" size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Tasks"
      component={MyToDoScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color="#0782F9"
            size={30}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Friends"
      component={FriendsScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account-group"
            color="#0782F9"
            size={30}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
