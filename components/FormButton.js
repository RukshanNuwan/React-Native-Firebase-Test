import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FromButton = ({ buttonTitle, backgroundColor, ...rest }) => {
  // Background Color
  return (
    <TouchableOpacity {...rest} style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 3,
  },

  buttonText: {
    color: "#fff",
  },
});

export default FromButton;
