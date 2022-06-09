import react, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
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

  const getTasksFromDB = () => {
    // console.log(route.params);
    const tasksFromDBRef = ref(db, "users/" + props.username + "/tasks");
    onValue(tasksFromDBRef, (snapshot) => {
      const data = snapshot.val();
      setTasksArray([...data]);
    });
  };

  useEffect(() => {
    getTasksFromDB();
  }, []);

  const addTaskToArray = () => {
    let currTasks = [];
    const tasksFromDBRef = ref(db, "users/" + props.username + "/tasks");
    onValue(tasksFromDBRef, (snapshot) => {
      currTasks = snapshot.val();
    });
    currTasks.push(task);
    const updates = {};
    updates["/users/" + props.username + "/tasks"] = currTasks;
    setTask("");
    return update(ref(db), updates);
  };

  const completeTask = (index) => {
    let tasksCopy = [...tasksArray];
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
          {tasksArray.map((eachTask, index, yesno) => {
            return (
              <Task
                key={index}
                text={eachTask}
                completeTask={() => completeTask(index)}
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
    fontSize: 24,
    fontWeight: "bold",
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
