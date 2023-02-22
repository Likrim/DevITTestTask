import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCountryCode, setNumber } from "../../reducer";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";

const PhoneInput = () => {
  const { countryCode, number } = useSelector(state => state.signup);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+1");
  const [items, setItems] = useState([
    {label: "+1", value: "+1"},
    {label: "+380", value: "+380"}
  ]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Phone Number</Text>
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
          dropDownContainerStyle={styles.dropDownContainerStyle}
          onChangeValue={value => dispatch(setCountryCode(value))}
        />
        <TextInput style={styles.textInput}
          placeholder="phone"
          keyboardType="number-pad"
          value={number}
          onChangeText={(text) => dispatch(setNumber(text))}
        />
      </View>
    </View>
  )
};

export default PhoneInput;