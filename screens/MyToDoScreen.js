/* eslint-disable no-unused-vars */
import react, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import Task from "../components/Task";
import { db } from "../firebase";
import { ref, onValue, update } from "firebase/database";

const MyToDoScreen = (props) => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [taskPointsArray, setPoints] = useState([]);

  const getTasksFromDB = () => {
    const tasksFromDBRef = ref(db, "users/" + props.username + "/tasks");
    onValue(tasksFromDBRef, (snapshot) => {
      const data = snapshot.val();
      let newDataArray = data.map((subdata) => {
        return subdata[0];
      });
      let points = data.map((task) => {
        return task[1];
      });
      setTasksArray([...newDataArray]);
      setPoints([...points]);
    });
  };
  //will happen every time the page rerenders
  useEffect(() => {
    getTasksFromDB();
  }, []);

  const addTaskToArray = () => {
    //make a copy of tasks array so that we can push the new task to the copy, then update the db
    let currTasks = [];
    const tasksFromDBRef = ref(db, "users/" + props.username + "/tasks");
    onValue(tasksFromDBRef, (snapshot) => {
      currTasks = snapshot.val();
    });
    currTasks.push([task, 20]);
    const updates = {};
    updates["/users/" + props.username + "/tasks"] = currTasks;
    setTask("");
    return update(ref(db), updates);
  };

  const updatePoints = (index) => {
    //make a copy of tasks array from db to get the 1st index of each subarray which is the point value
    let points = [];
    points = [...taskPointsArray];
    // get a copy of the total amount of points the user has
    let totalPoints;
    const totalPointsFromDBRef = ref(db, "users/" + props.username + "/points");
    onValue(totalPointsFromDBRef, (snapshot) => {
      totalPoints = snapshot.val();
    });
    const updates = {};
    updates["/users/" + props.username + "/points"] = totalPoints +=
      points[index];
    return update(ref(db), updates);
  };

  const completeTask = (index) => {
    let tasksCopy = [];
    const tasksFromDBRef = ref(db, "users/" + props.username + "/tasks");
    onValue(tasksFromDBRef, (snapshot) => {
      tasksCopy = snapshot.val();
    });
    //at the index of array, remove 1 item
    tasksCopy.splice(index, 1);
    const updates = {};
    updates["/users/" + props.username + "/tasks"] = tasksCopy;
    return update(ref(db), updates);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.sectionTitle}>Tasks</Text>
      </View>

      <View style={styles.textWrapper}>
        <View style={styles.items}>
          {tasksArray.map((eachTask, index) => {
            return (
              <Task
                key={index}
                text={eachTask}
                updatePoints={() => updatePoints(index)}
                completeTask={() => completeTask(index)}
                taskPointsArr={taskPointsArray[index]}
              />
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.inputWrapper} behavior="padding">
        <TextInput
          style={styles.input}
          placeholder={"Write a new task..."}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={addTaskToArray}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MyToDoScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    paddingTop: 70,
    margin: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  textWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#6EB0AE",
  },
  items: {
    marginTop: 20,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    width: 270,
    backgroundColor: "white",
    borderRadius: 20,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "white",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
  },
});
