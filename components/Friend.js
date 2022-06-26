/* eslint-disable no-unused-vars */
import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebase";

const Friend = (props) => {
    const [friendsArray, setFriendsArray] = useState([]);

    const getFriends = () => {
      let currFriends = [];
      const tasksFromDBRef = ref(db, "users/" + props.username + "/friends");
      onValue(tasksFromDBRef, (snapshot) => {
        currFriends = snapshot.val();
      });
      setFriendsArray([...currFriends]);
    };
    
    useEffect(() => {
      getFriends();
    }, []);

  return (
    //map over friendsArray then create view based on each friend,
    //then sort friends based on points

    <View>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "gold" }}>
            <Text>1</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace100</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "silver" }}>
            <Text>2</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace200</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "#CD7F32" }}>
            <Text>3</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace300</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>4</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace400</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>5</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace500</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>6</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace600</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>7</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace700</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>8</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace800</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>9</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace900</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>10</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace1000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>11</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace1100</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "white" }}>
            <Text>12</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Grace1200</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",

    // alignItems: "center",
    alignSelf: "center",
  },
  text: {},
  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginLeft: 12,
    width: "80%",
  },
  rowContainer: {
    flexDirection: "row",
    padding: 8,
  },
  numberContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "16%",
    borderRadius: 10,
    borderWidth: "3mm",
  },
});

export default Friend;
