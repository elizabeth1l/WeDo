/* eslint-disable no-unused-vars */
import react from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Friend from "../components/Friend";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LeaderboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.addContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="account-plus-outline"
            color="white"
            size="20"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leaderboard </Text>
      </View>

      <View>
        <Friend></Friend>
      </View>
    </ScrollView>
  );
};

export default LeaderboardScreen;
const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 18,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6EB0AE",
  },
  addContainer: {
    marginTop: 50,
    marginRight: 25,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  container: {},
});
