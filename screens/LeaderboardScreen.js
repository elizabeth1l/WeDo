/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TextInput,
  Dimensions,
  Alert
} from "react-native";
import { db } from "../firebase";
import Friend from "../components/Friend";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ref, onValue, update } from "firebase/database";
import Modal from 'react-native-modal';
const { width } = Dimensions.get("window");

const LeaderboardScreen = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  const addFriend = () => {
    let currFriends = [];

    console.log(inputValue);
    const doesFriendExist = checkIfUserExists();
    if (doesFriendExist) {
      const friendsFromDBRef = ref(db, "users/" + props.username + "/friends");
      onValue(friendsFromDBRef, (snapshot) => {
        currFriends = snapshot.val();
      });
      //do check here if inputValue user exists in db.
      //getPointsForUser(inputValue)
      currFriends.push([inputValue]);
      const updates = {};
      updates["/users/" + props.username + "/friends"] = currFriends;
      setInputValue("");
      return update(ref(db), updates);
    } else {
      Alert.alert('No such user exists');
      setInputValue('');
    }
  };

  const checkIfUserExists = () => {
    let friend = false;
    for (let i = 0; i < 10; i++) {
      const doesFriendExist =  ref(db, "users/" + inputValue.toLowerCase());
      onValue(doesFriendExist, (snapshot) => {
        if (snapshot.val() != null) {
          friend = true;
        }
      });
    }
    return friend;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.addContainer}>
        {/* <TouchableOpacity onPress = {toggleModal}> */}
        <Button title="add" onPress={toggleModalVisibility} />
        <MaterialCommunityIcons
          name="account-plus-outline"
          color="white"
          size={20}
        />

      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Leaderboard </Text>
      </View>

      <View>
        <Friend username={props.username}></Friend>
      </View>

      <KeyboardAvoidingView behavior="padding">
        <Modal isVisible={isModalVisible}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <TextInput placeholder="Enter friend username..."
                value={inputValue} style={styles.textInput}
                onChangeText={(value) => setInputValue(value)} />
              <Button title="Submit" onPress={addFriend} />
              <Button title="Close" onPress={toggleModalVisibility} />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>


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
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    height: 180,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  }
});
