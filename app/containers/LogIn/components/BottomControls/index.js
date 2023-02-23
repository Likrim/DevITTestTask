import React from "react";
import { View, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLoginDefault } from "../../reducer";
import { validateEmail, validatePassword } from "../../../../helpers/validation";
import i18next from "../../../../utils/i18n";
import db from "../../../../utils/database";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const BottomControls = ({ navigation }) => {
  const { emailLogin, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loginHandle = () => {
    if (emailLogin === "" || password === "") {
      Alert.alert(i18next.t("inputErrorTitle"), i18next.t("inputErrorMessage"));
      return;
    }  else if(!validateEmail(emailLogin)){
      Alert.alert(i18next.t("emailValidationErrorTitle"), i18next.t("emailValidationErrorMessage"));
    } else if(!validatePassword(password)) {
      Alert.alert(i18next.t("passwordValidationErrorTitle"), i18next.t("passwordValidationErrorMessage"));
    } else if (validateEmail(emailLogin) && validatePassword(password)){
      try {
        db.transaction(tx => {
          tx.executeSql("SELECT * FROM users WHERE email = ? AND password = ?;",
            [emailLogin, password],
            (tx, results) => {
              if(results.rows.length !== 0) {
                navigation.navigate("profile");
              } else {
                Alert.alert(i18next.t("loginErrorTitle"), i18next.t("loginErrorMessage"));
                dispatch(setLoginDefault());
              }
            },
            (tx, error) => {
              console.log("Error INSERT => ", error);
            });
        });
      } catch(error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.bottomControlContainer}>
      <CTButton title={i18next.t("loginButton")} containerStyles={{marginTop: 40}} onPress={loginHandle}/>
      <View style={styles.createAccountContainer}>
        <Text style={styles.nonPressebleText}>{i18next.t("newUser")}</Text>
        <CTButton title={i18next.t("signUp")}
          containerStyles={styles.buttonContainer}
          titleStyles={styles.buttonText}
          onPress={() => navigation.navigate("signup")}/>
      </View>
    </View>
  );
};

export default BottomControls;