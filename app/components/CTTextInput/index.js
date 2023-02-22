import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setIsHide } from "./reducer";
import PropTypes from "prop-types";
import EyeOpen from "../../icons/EyeOpen";
import EyeClose from "../../icons/EyeClose";
import styles from "./styles";

const CTTextInput = ({ title, isHaveHide, placeholder, keyboardType, value, setValue }) => {
  const isHide = useSelector(state => state.textInput.isHide);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={isHaveHide ? isHide : false}
          keyboardType={keyboardType}
          value={value}
          onChangeText={text => setValue(text)}
        />
        {isHaveHide &&
        <TouchableOpacity style={styles.icon}
          onPress={() => dispatch(setIsHide())}>
          {!isHide ? 
            <EyeClose width={18}/> :
            <EyeOpen width={18}/>}
        </TouchableOpacity>}
      </View>
    </View>
  );
};

CTTextInput.propTypes = {
  title: PropTypes.string,
  isHaveHide: PropTypes.bool,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  setValue: PropTypes.func,
  value: PropTypes.any,
};

export default CTTextInput;