import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPhone, setPosition, setSkype } from "../../reducer";
import i18next from "../../../../utils/i18n";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { name, email, phone, position, skype } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.mainContainer}>
      <CTTextInput title={i18next.t("nameInputTitle")}
        placeholder={i18next.t("nameInputPlaceholder")}
        keyboardType={"default"}
        value={name}
        setValue={text => dispatch(setName(text))}
      />
      <CTTextInput title={i18next.t("emailInputTitle")}
        placeholder={i18next.t("emailInputPlaceholder")}
        keyboardType={"email-address"}
        value={email}
        setValue={text => dispatch(setEmail(text))}
      />
      <CTTextInput title={i18next.t("phoneInputTitle")}
        placeholder={i18next.t("phoneInputPlaceholder")}
        keyboardType={"number-pad"}
        value={phone}
        setValue={text => dispatch(setPhone(text))}
      />
      <CTTextInput title={i18next.t("positionInputTitle")}
        placeholder={i18next.t("positionInputPlaceholder")}
        keyboardType={"default"}
        value={position}
        setValue={text => dispatch(setPosition(text))}
      />
      <CTTextInput title={i18next.t("skypeInputTitle")}
        placeholder={i18next.t("skypeInputTitle")}
        keyboardType={"default"}
        value={skype}
        setValue={text => dispatch(setSkype(text))}
      />
    </View>
  );
};

export default MainInputs;