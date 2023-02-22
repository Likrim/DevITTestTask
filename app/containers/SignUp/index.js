import React, { useEffect } from "react";
import { ScrollView, BackHandler, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import { validateEmail } from "../../helpers/validation";
import { setLoginEmail } from "../LogIn/reducer";
import { setDefault } from "./reducer";
import db from "../../utils/database";
import Header from "../../components/Header";
import PhoneInput from "./components/PhoneInput";
import CodeInput from "./components/CodeInput";
import MainInputs from "./components/MainInputs";
import CTButton from "../../components/CTButton";
import GoToLogin from "./components/GoToLogin";
import styles from "./styles";

const SignUp = ({ navigation }) => {
  const { name, email, password, confirmPassword, countryCode, number } = useSelector(state => state.signup);
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }, []);

  const signupHandle = () => {
    if(email === "" || password === "" || confirmPassword === "") {
      Alert.alert("Input Error!", "Email and password are required fields!");
      return;
    }
    if(validateEmail(email) && password === confirmPassword) {
      db.transaction(tx => {
        tx.executeSql(`INSERT INTO users 
          (name, email, phone, password)
          VALUES (?,?,?,?)`,
        [name, email, countryCode + number, password],
        (tx, result) => {},
        (tx, error) => console.log("INSERT Error => ", error));
      });
      dispatch(setLoginEmail(email));
      dispatch(setDefault());
      navigation.navigate("profile");
    } else if(!validateEmail(email) && password !== confirmPassword) {
      Alert.alert("Validation Error!", "Email or password is not correct!");
    } else if(!validateEmail(email)) {
      Alert.alert("Validation Error!", "Email is not correct!");
    } else {
      Alert.alert("Comparison Error!", "Passwords do not match!");
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          <Header title={"Sign Up To Woorkroom"}/>
          <PhoneInput />
          <CodeInput />
          <MainInputs />
          <CTButton title={"Next"}
            onPress={signupHandle}
            containerStyles={{marginTop: 40}}/>
          <GoToLogin navigation={navigation}/>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;