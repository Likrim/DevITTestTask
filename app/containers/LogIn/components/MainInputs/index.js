import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setLoginEmail, setLoginPassword } from "../../reducer";
import i18next from "../../../../utils/i18n";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { emailLogin, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <View style={styles.textInputContainer}>
      <CTTextInput title={i18next.t("emailInputTitle")}
        isHaveHide={false}
        placeholder={i18next.t("emailInputPlaceholder")}
        keyboardType="email-address"
        value={emailLogin}
        setValue={(text) => dispatch(setLoginEmail(text))}/>
      <CTTextInput title={i18next.t("passwordInputTitle")}
        isHaveHide={true}
        placeholder={i18next.t("passwordInputTitle")}
        keyboardType="default"
        value={password}
        setValue={(text) => dispatch(setLoginPassword(text))}/>
      <TouchableOpacity style={styles.forgotPasswordButton}
        onPress={() => console.warn("On Press ForgotPassword Button")}>
        <Text style={styles.forgotPasswordButtonText}>{i18next.t("forgotPassword")}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainInputs;