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
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>Welcome {props.username}</Text>
      </View>

      <Text>You currently have {points} points</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 120,
    paddingHorizontal: 25,
  },
  titleFont: {
    fontSize: 30,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6EB0AE",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
