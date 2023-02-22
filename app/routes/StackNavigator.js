import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../containers/LogIn";
import SignUp from "../containers/SignUp";
import Profile from "../containers/Profile";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="login" component={LogIn}/>
      <Stack.Screen name="signup" component={SignUp}/>
      <Stack.Screen name="profile" component={Profile}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;