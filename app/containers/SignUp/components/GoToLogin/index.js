import React from "react";
import { View, Text } from "react-native";
import i18next from "../../../../utils/i18n";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const GoToLogin = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{i18next.t("haveAccount")}</Text>
      <CTButton title={i18next.t("loginButton")}
        titleStyles={styles.buttonText}
        containerStyles={styles.buttonContainer}
        onPress={() => navigation.navigate("login")}/>
    </View>
  );
};

export default GoToLogin;