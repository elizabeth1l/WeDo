/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";

const Task = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => {
              props.updatePoints();
              props.completeTask();
            }}
          ></TouchableOpacity>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>

        <Button backgroundColor="white" title="i" onPress={toggleModal} />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.textContainer}>
          <Text>Complete this task for:</Text>
          <Text>{props.taskPointsArr}</Text>
          <Text>points</Text>
          <Button title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  square: {
    width: 24,
    height: 24,
    borderColor: "#6EB0AE",
    borderWidth: 2,
    oopacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
  infoContainer: {
    alignItems: "center",
    width: 20,
    height: 20,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 50,
  },

  textContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 100,
    width: 300,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default Task;
