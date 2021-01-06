import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const FromButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderRadius: 3,
    backgroundColor: "teal",
  },

  buttonText: {
    color: '#fff'
  }
});

export default FromButton;
