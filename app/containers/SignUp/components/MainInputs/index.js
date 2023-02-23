import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword, setConfirmPassword } from "../../reducer";
import i18next from "../../../../utils/i18n";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { name, email, password, confirmPassword } = useSelector(state => state.signup);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <CTTextInput placeholder={i18next.t("nameInputPlaceholder")}
        title={i18next.t("nameInputTitle")}
        keyboardType="default"
        value={name}
        setValue={(text) => dispatch(setName(text))}/>
      <CTTextInput placeholder={i18next.t("emailInputPlaceholder")}
        title={i18next.t("emailInputTitle")}
        keyboardType="email-address"
        value={email}
        setValue={(text) => dispatch(setEmail(text))}/>
      <CTTextInput placeholder={i18next.t("passwordInputTitle")}
        title={i18next.t("passwordInputTitle")}
        keyboardType="default"
        isHaveHide
        value={password}
        setValue={(text) => dispatch(setPassword(text))}/>
      <CTTextInput placeholder={i18next.t("confirmInputPlaceholder")}
        title={i18next.t("confirmInputTitle")}
        keyboardType="default"
        isHaveHide
        value={confirmPassword}
        setValue={(text) => dispatch(setConfirmPassword(text))}/>
    </View>
  );
};

export default MainInputs;