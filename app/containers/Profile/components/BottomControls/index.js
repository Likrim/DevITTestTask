import React from "react";
import { View, Alert } from "react-native";
import { useSelector } from "react-redux";
import CTButton from "../../../../components/CTButton";
import styles from "./styles";

const BottomControls = () => {
  const { image, name, email, phone, position, skype } = useSelector(state => state.profile);

  const saveHandle = () => {
    console.warn("Save Button Pressed!");
  };

  return (
    <View style={styles.mainContainer}>
      <CTButton title={"Save"} onPress={saveHandle} containerStyles={{marginTop: 30}}/>
    </View>
  );
};

export default BottomControls;