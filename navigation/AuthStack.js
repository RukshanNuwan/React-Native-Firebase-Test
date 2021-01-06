import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SignUpForm from "../screens/signUpForm";
import LoginForm from "../screens/loginForm";

const Stack = createStackNavigator();

const AuthStack = () => {
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
