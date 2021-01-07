import React, { useContext, useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login, fbLogin, googleLogin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      {/*Email Address*/}
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalized="none"
        autoCorrect={false}
      />

      {/*Password*/}
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Login"
        backgroundColor="teal"
        onPress={() => login(email, password)}
        color="#fff"
      />

      {/*Login with FaceBook*/}
      <FormButton
        buttonTitle="Login with Facebook"
        backgroundColor="#4267B2"
        onPress={() => fbLogin()}
        color="#fff"
      />

      {/*Login with Google*/}
      <FormButton
        buttonTitle="Login with Google"
        backgroundColor="#DB4437"
        onPress={() => googleLogin()}
        color="#fff"
      />

      {/*SignUp Link*/}
      <TouchableOpacity style={styles.signUpLink} onPress={() => navigation.navigate("SignUp")}>
        <Text>Don't have an account? SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  signUpLink: {
    marginTop: 20,
  },
});

export default LoginForm;
