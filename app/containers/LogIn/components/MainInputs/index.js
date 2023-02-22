import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../reducer";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <View style={styles.textInputContainer}>
      <CTTextInput title="Your Email"
        isHaveHide={false}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        setValue={(text) => dispatch(setEmail(text))}/>
      <CTTextInput title="Password"
        isHaveHide={true}
        placeholder="Password"
        keyboardType="default"
        value={password}
        setValue={(text) => dispatch(setPassword(text))}/>
      <TouchableOpacity style={styles.forgotPasswordButton}
        onPress={() => console.warn("On Press ForgotPassword Button")}>
        <Text style={styles.forgotPasswordButtonText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainInputs;