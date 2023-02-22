import React from "react";
import { View, Text, Alert } from "react-native";
import { useSelector } from "react-redux";
import { validateEmail } from "../../../../helpers/validation";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const BottomControls = ({ navigation }) => {
  const { email, password } = useSelector((state) => state.login);

  const loginHandle = () => {
    if (email === "" || password === "") {
      Alert.alert("Input Error!", "Email and password are required fields!");
      return;
    }
    if (validateEmail(email)){
      navigation.navigate("profile");
    } else {
      Alert.alert("Validation Error", "Email is not correct!");
    }
  };

  return (
    <View style={styles.bottomControlContainer}>
      <CTButton title={"Log In"} containerStyles={{marginTop: 40}} onPress={loginHandle}/>
      <View style={styles.createAccountContainer}>
        <Text style={styles.nonPressebleText}>New User? </Text>
        <CTButton title={"Sign Up"}
          containerStyles={styles.buttonContainer}
          titleStyles={styles.buttonText}
          onPress={() => navigation.navigate("signup")}/>
      </View>
    </View>
  );
};

export default BottomControls;