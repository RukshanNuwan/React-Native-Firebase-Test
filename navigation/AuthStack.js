import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { GoogleSignin } from "@react-native-community/google-signin";

import SignUpForm from "../screens/signUpForm";
import LoginForm from "../screens/loginForm";

const Stack = createStackNavigator();

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "745459893267-ods6e6hasm2gouft9nep3msruhs2r6ln.apps.googleusercontent.com",
    });
  }, []);

  return (
    <Stack.Navigator initialRouterName="Login">
      <Stack.Screen name="Login"
                    component={LoginForm}
        // Hide status bar and name
                    options={{ header: () => null }} />

      <Stack.Screen name="SignUp" component={SignUpForm} />
    </Stack.Navigator>
  );
};

export default AuthStack;
