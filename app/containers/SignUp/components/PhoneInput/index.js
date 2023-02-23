import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCountryCode, setNumber } from "../../reducer";
import { countryCodes } from "./config";
import i18next from "../../../../utils/i18n";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";

const PhoneInput = () => {
  const { number } = useSelector(state => state.signup);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+1");
  const [items, setItems] = useState(countryCodes);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{i18next.t("phoneInputTitle")}</Text>
      <View style={styles.inputsContainer}>
        <DropDownPicker 
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropContainer}
          style={styles.dropdown}
          textStyle={styles.dropDownText}
          onChangeValue={value => dispatch(setCountryCode(value))}
          listMode="MODAL"
          modalAnimationType="slide"
        />
        <TextInput style={styles.textInput}
          placeholder={i18next.t("phoneInputPlaceholder")}
          keyboardType="number-pad"
          value={number}
          onChangeText={(text) => dispatch(setNumber(text))}
        />
      </View>
    </View>
  )
};

export default PhoneInput;