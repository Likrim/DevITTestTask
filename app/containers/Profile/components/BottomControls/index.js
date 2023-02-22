import React from "react";
import { Alert, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLoginDefault } from "../../../LogIn/reducer";
import { setEmail } from "../../reducer";
import { validateEmail } from "../../../../helpers/validation";
import db from "../../../../utils/database";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const BottomControls = ({ navigation }) => {
  const { image, name, email, phone, position, skype } = useSelector(state => state.profile);
  const { emailLogin } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const saveHandle = () => {
    try {
      validateEmail(email) ? 
      db.transaction(tx => {
        tx.executeSql(`UPDATE users
          SET image = ?, name = ?, email = ?, phone = ?, position = ?, skype = ?
          WHERE email = ?`,
          [image, name, email, phone, position, skype, emailLogin],
          (tx, results) => {
            if(results.rowsAffected !== 0) {
              Alert.alert("Data Saved", "Your data saved successfully!", [
                {text: "Log Out", onPress: () => {
                  dispatch(setLoginDefault());
                  navigation.navigate("login");
                }},
                {text: "Stay In", onPress: () => {}}
              ]);
            }
          },
          (tx, error) => {
            if(error.message.includes("UNIQUE constraint failed")) {
              Alert.alert("Email Error", "The email you typed already exists", [
                {text: "Ok", onPress: () => dispatch(setEmail(emailLogin))}
              ]);
            }
          });
      }) : Alert.alert("E-mail Validation Error!", "Email is not correct!", [
        {text: "Ok", onPress: () => dispatch(setEmail(emailLogin))}
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <CTButton title={"Save"} onPress={saveHandle} containerStyles={{marginTop: 30}}/>
    </View>
  );
};

export default BottomControls;