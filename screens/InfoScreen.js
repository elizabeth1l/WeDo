/* eslint-disable no-unused-vars */
import react from "react";
import { StyleSheet, Text, View } from "react-native";

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to WeDo</Text>
      <View style={styles.instructionsContainer}>
        <View style={styles.promptContainer}>
          <Text style={styles.question}>What is WeDo?</Text>
          <Text style={styles.answer}>
            WeDo is short for "We Do Together". This app was created in hopes of
            improving productivity by taking our daily mundane tasks, and
            turning them into an interactive game with close friends. Your
            friends are able to keep you accountable and motivate you to finish
            your day off strong.
          </Text>
        </View>
        <View style={styles.promptContainer}>
          <Text style={styles.question}>
            How do you add and complete tasks?
          </Text>
          <Text style={styles.answer}>
            Your home page will show you how many points you have accumulated
            from completing tasks. In your tasks tab, you can add tasks using
            the input bar at the bottom of the page. Complete tasks by clicking
            on the left square of each task. Click on the right "i" button to
            see how many points that task is worth. When you complete a task,
            your points will increase accordingly.
          </Text>
        </View>
        <View style={styles.promptContainer}>
          <Text style={styles.question}>How do I add my friends?</Text>
          <Text style={styles.answer}>
            Head over to the leaderboard tab. There, you will be able to add
            friends using the plus button as well as see your friends ranked in
            order from first to last based on how many points they have
            accumulated.
          </Text>
        </View>
        <View style={styles.promptContainer}>
          <Text style={styles.question}>
            How do I interact with my friends?
          </Text>
          <Text style={styles.answer}>
            In the leaderboard tab, you will be able to click on your friends'
            usernames which will lead you to their to-do list. You will be able
            to wager the amount of points you want to bet that the chosen task
            will not be completed by the end of the day. Your friend will have
            to complete that task by the given deadline or else the amount of
            wagered points will be deducted and rewarded to you.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6EB0AE",
  },
  instructionsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  promptContainer: {
    paddingVertical: 15,
  },
  question: {
    paddingBottom: 10,
    fontStyle: "italic",
    fontSize: 12,
    color: "gray",
  },
  answer: {
    fontSize: 10,
  },
});
