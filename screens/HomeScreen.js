/* eslint-disable no-unused-vars */
import react, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const HomeScreen = (props) => {
  const [points, setPoints] = useState();

  const getPointsFromDB = () => {
    const pointsFromDBRef = ref(db, "users/" + props.username + "/points");
    onValue(pointsFromDBRef, (snapshot) => {
      const data = snapshot.val();
      setPoints(data);
    });
  };

  useEffect(() => {
    getPointsFromDB();
  }, []);

  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>Welcome {props.username}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.text}>You currently have</Text>
        <Text style={styles.number}>{points}</Text>
        <Text style={styles.text}>points</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 50,
    paddingHorizontal: 25,
  },
  titleFont: {
    color: "black",
    fontSize: 30,
    fontWeight: "500",
  },
  buttonContainer: {
    padding: 30,
    alignItems: "flex-end",
  },
  button: {
    borderColor: "#6EB0AE",
    borderWidth: "2",
    backgroundColor: "white",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#6EB0AE",
    fontWeight: "700",
    fontSize: 16,
  },
  pointsContainer: {
    borderColor: "#358e82",
    backgroundColor: "#6EB0AE",
    alignItems: "center",
    alignSelf: "center",
    width: 300,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
    color: "white",
    margin: 40,
  },
  number: {
    color: "white",
    fontSize: 100,
  },
});
