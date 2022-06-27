/* eslint-disable no-unused-vars */
import react, { useEffect, useState } from "react";
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

//user's tasks
// no input 
//title : user's username 

const FriendTaskScreen = ({ route }) => {
  const [tasksArray, setTasksArray] = useState([])

  const getFriendsTasksFromDB = () => {
    let name = route.params.name;

    const friendsTasksFromDB = ref(db, "users/" + name.toLowerCase() + '/tasks')
    console.log(friendsTasksFromDB);
    onValue(friendsTasksFromDB, (snapshot) => {
      const data = snapshot.val();
      let newDataArray = data.map((subdata) => {
        return subdata[0]
      })
      setTasksArray([...newDataArray])
    })
  }

  useEffect(() => {
    getFriendsTasksFromDB();
  }, []);

  return (
    <View>
      <View style={styles.itemContainer}>
        {tasksArray.map((eachTask, index) => {
          return (
            <View style = {styles.item}>
              <Text style = {styles.text} key={index}>{eachTask}</Text>
            </View>



          )
        })}
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 20,
  },
  item: {
    padding:40,
  },
  text{ 
    backgroundColor: 'white',
  },
})
export default FriendTaskScreen