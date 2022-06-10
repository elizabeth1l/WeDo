/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";

const Friend = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "gold" }}>
            <Text>1</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>JustinBieber100</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "silver" }}>
            <Text>2</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Taylorswift20</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.numberContainer, borderColor: "#CD7F32" }}>
            <Text>3</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity style={styles.text}>
              <Text>Taylorswift20</Text>
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
    padding: 20,
    width: "16%",
    borderRadius: 10,
    borderWidth: "3mm",
  },
});

export default Friend;
