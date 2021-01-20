import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import TodoScreen from "../screens/TodoScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
