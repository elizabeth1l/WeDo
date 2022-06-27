/* eslint-disable no-unused-vars */
import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const Friend = (props) => {
  // const friendsArray = ["test"];
  const [friendsArray, setFriendsArray] = useState([]);

  const getFriends = () => {
    let currFriends = [];
    const tasksFromDBRef = ref(db, "users/" + props.username + "/friends");
    onValue(tasksFromDBRef, (snapshot) => {
      currFriends = snapshot.val();
      setFriendsArray(currFriends);
    });
  
  };

  useEffect(() => {
    getFriends();
  }, []);

  const navigation = useNavigation();
  onPress = (friend) => {
    navigation.navigate("FriendTaskScreen", {
      name: friend,
    });
  }

  const getPointsForUser = (name) => {
    let points = 0;
    name = String(name);
    if (name === "me") {
      const pointsFromDBRef = ref(db, "users/" + props.username.toLowerCase() + "/points");
      onValue(pointsFromDBRef, (snapshot) => {
        points = snapshot.val();
      })
    } else {
      const pointsFromDBRef = ref(db, "users/" + name.toLowerCase() + "/points");
      onValue(pointsFromDBRef, (snapshot) => {
        points = snapshot.val();
      })
    }
    return points;
  }

  return (
    //map over friendsArray then create view based on each friend,
    //then sort friends based on points
    <View>
      <View style={styles.container}>

        {friendsArray.map((friend, index) => {
          return (
            <View key={index} style={styles.rowContainer}>
              <View style={{ ...styles.numberContainer, borderColor: "gold" }}>
                <Text>{getPointsForUser(friend)}</Text>
              </View>
              <View style={styles.textContainer}>
                <TouchableOpacity style={styles.text} onPress={() => {onPress(friend[0])}}>
                  <Text>{friend} </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}

      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",

    // alignItems: "center",
    alignSelf: "center",
  },
  text: {},
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginLeft: 25,
    width: "70%",
  },
  rowContainer: {
    padding: 5,
    display: "flex",
    flexDirection: 'row'
  },
  numberContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "13%",
    borderRadius: 15,
    borderWidth: "2mm",
    padding: 5, 
    marginLeft: 19
  },
});

export default Friend;
