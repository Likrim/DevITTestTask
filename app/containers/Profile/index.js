import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, BackHandler, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "./components/Header";
import MainInputs from "./components/MainInputs";
import BottomControls from "./components/BottomControls";
import styles from "./styles";

const Profile = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress");
    }
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1, backgroundColor: "#fff"}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          <Header />
          <MainInputs />
          <BottomControls />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Profile;