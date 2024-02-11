import React, { useEffect } from "react";
import { ScrollView, View, BackHandler } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducer";
import { makeUserObjectFromObject } from "../../helpers/generateUserObject";
import db from "../../utils/database";
import Header from "./components/Header";
import MainInputs from "./components/MainInputs";
import BottomControls from "./components/BottomControls";
import styles from "./styles";

const Profile = ({ navigation }) => {
  const { emailLogin } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    try {
      db.transaction(tx => {
        tx.executeSql("SELECT * FROM users WHERE email = ?",
          [emailLogin],
          (tx, results) => {
            const object = makeUserObjectFromObject(results.rows._array[0]);
            dispatch(setUser(object));
          },
          (tx, error) => {console.log("SELECT Profile Error => ", error);});
      });
    } catch (error) {
      console.log("Profile Read Error => ", error);
    };
    return () => {
      BackHandler.removeEventListener("hardwareBackPress");
    };
  }, []);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1, backgroundColor: "#fff"}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <ScrollView bounces={false}>
        <View style={styles.mainContainer}>
          <Header navigation={navigation}/>
          <MainInputs />
          <BottomControls navigation={navigation}/>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Profile;