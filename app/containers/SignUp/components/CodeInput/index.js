import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import i18next from "../../../../utils/i18n";
import styles from "./styles";

const CodeInput = () => {
  const [inputFocus1, setInputFocus1] = useState(false);
  const [inputFocus2, setInputFocus2] = useState(false);
  const [inputFocus3, setInputFocus3] = useState(false);
  const [inputFocus4, setInputFocus4] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>{i18next.t("codeInputTitle")}</Text>
      <View style={styles.inputsContainer}>
        <TextInput style={[styles.textInput, {borderColor: inputFocus1 ? "#FFC612" : "#d7d7d7"}]} 
          maxLength={1}
          keyboardType="decimal-pad"
          onFocus={() => setInputFocus1(true)}
          onEndEditing={() => setInputFocus1(false)}
        />
        <TextInput style={[styles.textInput, {borderColor: inputFocus2 ? "#FFC612" : "#d7d7d7"}]} 
          maxLength={1}
          keyboardType="decimal-pad"
          onFocus={() => setInputFocus2(true)}
          onEndEditing={() => setInputFocus2(false)}
        />
        <TextInput style={[styles.textInput, {borderColor: inputFocus3 ? "#FFC612" : "#d7d7d7"}]} 
          maxLength={1}
          keyboardType="decimal-pad"
          onFocus={() => setInputFocus3(true)}
          onEndEditing={() => setInputFocus3(false)}
        />
        <TextInput style={[styles.textInput, {borderColor: inputFocus4 ? "#FFC612" : "#d7d7d7"}]} 
          maxLength={1}
          keyboardType="decimal-pad"
          onFocus={() => setInputFocus4(true)}
          onEndEditing={() => setInputFocus4(false)}
        />
      </View>
    </View>
  );
};

export default CodeInput;