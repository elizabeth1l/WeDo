/* eslint-disable no-unused-vars */
import react from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Friend from "../components/Friend";

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leaderboard </Text>
      </View>

      <View>
        <Friend></Friend>
      </View>
    </View>
  );
};

export default LeaderboardScreen;
const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 40,
    margin: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6EB0AE",
  },
});
