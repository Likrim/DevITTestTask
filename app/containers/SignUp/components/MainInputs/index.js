import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword, setConfirmPassword } from "../../reducer";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { name, email, password, confirmPassword } = useSelector(state => state.signup);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <CTTextInput placeholder={"Your name"}
        title="Your Name"
        keyboardType="default"
        value={name}
        setValue={(text) => dispatch(setName(text))}/>
      <CTTextInput placeholder={"E-mail"}
        title="Your Email"
        keyboardType="email-address"
        value={email}
        setValue={(text) => dispatch(setEmail(text))}/>
      <CTTextInput placeholder={"Password"}
        title="Password"
        keyboardType="default"
        isHaveHide
        value={password}
        setValue={(text) => dispatch(setPassword(text))}/>
      <CTTextInput placeholder={"Confirm password"}
        title="Confirm Password"
        keyboardType="default"
        isHaveHide
        value={confirmPassword}
        setValue={(text) => dispatch(setConfirmPassword(text))}/>
    </View>
  );
};

export default MainInputs;