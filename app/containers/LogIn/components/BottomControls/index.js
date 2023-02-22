import React from "react";
import { View, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLoginDefault } from "../../reducer";
import { validateEmail, validatePassword } from "../../../../helpers/validation";
import db from "../../../../utils/database";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const BottomControls = ({ navigation }) => {
  const { emailLogin, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const loginHandle = () => {
    if (emailLogin === "" || password === "") {
      Alert.alert("Input Error!", "Email and password are required fields!");
      return;
    }  else if(!validateEmail(emailLogin)){
      Alert.alert("E-mail Validation Error!", "Email is not correct!");
    } else if(!validatePassword(password)) {
      Alert.alert("Password Validation Error!", "Password must have length form 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.");
    } else if (validateEmail(emailLogin) && validatePassword(password)){
      try {
        db.transaction(tx => {
          tx.executeSql("SELECT * FROM users WHERE email = ? AND password = ?;",
            [emailLogin, password],
            (tx, results) => {
              if(results.rows.length !== 0) {
                navigation.navigate("profile");
              } else {
                Alert.alert("Log In Error", "This user doesn`t exist!");
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