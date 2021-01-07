import React, { useContext } from "react";

import { Text, View, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

import FormButton from "../components/FormButton";

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text>Name - {user.displayName}</Text>
      <Text>Email - {user.email}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()}/>
      <Text>Successfully Logged</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;
