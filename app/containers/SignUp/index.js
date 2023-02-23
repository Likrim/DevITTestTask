import React, { useEffect } from "react";
import { ScrollView, BackHandler, View, Alert, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector, useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../../helpers/validation";
import { setLoginEmail } from "../LogIn/reducer";
import { setDefault } from "./reducer";
import i18next from "../../utils/i18n";
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
      Alert.alert(i18next.t("inputErrorTitle"), i18next.t("inputErrorMessage"));
      return;
    }
    if(validateEmail(email) && password === confirmPassword && validatePassword(password)) {
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
      Alert.alert(i18next.t("validationErrorTitle"), i18next.t("validationErrorMessage"));
    } else if(!validateEmail(email)) {
      Alert.alert(i18next.t("emailValidationErrorTitle"), i18next.t("emailValidationErrorMessage"));
    } else if(!validatePassword(password)) {
      Alert.alert(i18next.t("passwordValidationErrorTitle"), i18next.t("passwordValidationErrorMessage"));
    } else {
      Alert.alert(i18next.t("comparisonErrorTitle"), i18next.t("comparisonErrorMessage"));
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          <Header title={i18next.t("signupHeader")}/>
          <PhoneInput />
          <CodeInput />
          <MainInputs />
          <CTButton title={i18next.t("signupButton")}
            onPress={signupHandle}
            containerStyles={{marginTop: 40, width: Dimensions.get("window").width - 60}}/>
          <GoToLogin navigation={navigation}/>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;