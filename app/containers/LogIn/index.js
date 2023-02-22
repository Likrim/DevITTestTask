import React, { useEffect } from "react";
import { Keyboard, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setPaddingTopView, setPaddingTopHeaderText, setPaddingBottomHeaderText } from "./reducer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../components/Header";
import MainInputs from "./components/MainInputs";
import BottomControls from "./components/BottomControls";
import styles from "./styles";

const LogIn = ({ navigation }) => {
  const paddingTopView = useSelector((state) => state.login.paddingTopView);
  const dispatch = useDispatch();

  useEffect(() => {
    Keyboard.addListener(Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow", keyboardShow);
    Keyboard.addListener(Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide", keyboardHide);

    return () => {
      Platform.OS === "ios" ?
        Keyboard.removeAllListeners("keyboardWillShow") :
        Keyboard.removeAllListeners("keyboardDidShow");
      Platform.OS === "ios" ?
        Keyboard.removeAllListeners("keyboardWillHide") :
        Keyboard.removeAllListeners("keyboardDidHide");
    }
  }, []);

  const keyboardShow = () => {
    dispatch(setPaddingTopView(10));
    dispatch(setPaddingTopHeaderText(10));
    dispatch(setPaddingBottomHeaderText(0));
  };

  const keyboardHide = () => {
    dispatch(setPaddingTopView(50));
    dispatch(setPaddingTopHeaderText(90));
    dispatch(setPaddingBottomHeaderText(10));
  };

  return (
    <KeyboardAwareScrollView 
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={[styles.mainContainer, {paddingTop: paddingTopView}]}
      scrollEnabled={false}>
      <Header title={"Log In To Woorkroom"}/>
      <MainInputs />
      <BottomControls navigation={navigation} />
    </KeyboardAwareScrollView>
  );
};

export default LogIn;