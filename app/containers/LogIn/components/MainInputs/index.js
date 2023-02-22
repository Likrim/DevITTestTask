import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLoginEmail, setLoginPassword } from "../../reducer";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { emailLogin, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <View style={styles.textInputContainer}>
      <CTTextInput title="Your Email"
        isHaveHide={false}
        placeholder="E-mail"
        keyboardType="email-address"
        value={emailLogin}
        setValue={(text) => dispatch(setLoginEmail(text))}/>
      <CTTextInput title="Password"
        isHaveHide={true}
        placeholder="Password"
        keyboardType="default"
        value={password}
        setValue={(text) => dispatch(setLoginPassword(text))}/>
      <TouchableOpacity style={styles.forgotPasswordButton}
        onPress={() => console.warn("On Press ForgotPassword Button")}>
        <Text style={styles.forgotPasswordButtonText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainInputs;