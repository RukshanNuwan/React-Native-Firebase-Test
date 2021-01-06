import React, { useContext } from "react";

import { Text, View } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

import FormButton from "../components/FormButton";

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Successfully Logged</Text>
      <Text>Welcome {user.id}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()}/>
    </View>
  );
};

export default HomeScreen;
