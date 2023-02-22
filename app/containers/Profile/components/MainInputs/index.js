import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPhone, setPosition, setSkype } from "../../reducer";
import CTTextInput from "../../../../components/CTTextInput";
import styles from "./styles";

const MainInputs = () => {
  const { name, email, phone, position, skype } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <CTTextInput title={"Name"}
        placeholder={"Name"}
        keyboardType={"default"}
        value={name}
        setValue={text => dispatch(setName(text))}
      />
      <CTTextInput title={"Email"}
        placeholder={"Email"}
        keyboardType={"default"}
        value={email}
        setValue={text => dispatch(setEmail(text))}
      />
      <CTTextInput title={"Phone"}
        placeholder={"Phone"}
        keyboardType={"default"}
        value={phone}
        setValue={text => dispatch(setPhone(text))}
      />
      <CTTextInput title={"Position"}
        placeholder={"Position"}
        keyboardType={"default"}
        value={position}
        setValue={text => dispatch(setPosition(text))}
      />
      <CTTextInput title={"Skype"}
        placeholder={"Skype"}
        keyboardType={"default"}
        value={skype}
        setValue={text => dispatch(setSkype(text))}
      />
    </View>
  );
};

export default MainInputs;