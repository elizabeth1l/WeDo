/* eslint-disable no-unused-vars */
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyToDoScreen from "./screens/MyToDoScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import FriendTaskScreen from './screens/FriendTaskScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = ({ route }) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      children={() => <HomeScreen username={route.params.username} />}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" color="#6EB0AE" size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Tasks"
      children={() => <MyToDoScreen username={route.params.username} />}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color="#6EB0AE"
            size={30}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Leaderboard"
      children={() => <LeaderboardScreen username={route.params.username} />}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account-group"
            color="#6EB0AE"
            size={30}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Info"
      component={InfoScreen}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="information-outline"
            color="#6EB0AE"
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
        <Stack.Screen 
          name = "FriendTaskScreen"
          component = {FriendTaskScreen}
          options={{ title: 'Tasks' }}
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
