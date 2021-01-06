import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FromInput = ({ labelValue, placeholderText, ...rest }) => {
  return (
    <View>
      <TextInput
        value={labelValue}
        placeholder={placeholderText}
        {...rest}
        style={styles.inputFields}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFields: {
    width: 300,
    marginVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'darkgrey'
  }
});

export default FromInput;
