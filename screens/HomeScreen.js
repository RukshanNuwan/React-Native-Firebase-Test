import React, { useContext } from "react";

import { Text, View, StyleSheet, Image, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

import FormButton from "../components/FormButton";

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={{ uri: user.photoURL }} />
      <Text>Welcome</Text>
      <Text>Name - {user.displayName}</Text>
      <Text>Email - {user.email}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}
        backgroundColor="lightgrey"
        color="red"
      />
      <Text>Successfully Logged</Text>

      <View style={styles.button}>
        <Button
          title="Go to User Screen"
          onPress={() => navigation.navigate('User')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="ToDo Screen"
          onPress={() => navigation.navigate('Todo')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },

  button: {
    marginBottom: 10
  }
});

export default HomeScreen;
