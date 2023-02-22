import React from "react";
import { View, Text } from "react-native";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const GoToLogin = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Have Account? </Text>
      <CTButton title={"Log In"}
        titleStyles={styles.buttonText}
        containerStyles={styles.buttonContainer}
        onPress={() => navigation.navigate("login")}/>
    </View>
  );
};

export default GoToLogin;