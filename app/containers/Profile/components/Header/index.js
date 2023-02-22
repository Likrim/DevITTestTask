import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { makeUserObjectFromObject, makeUserObjectFromValues } from "../../../../helpers/generateUserObject";
import { setImage, setDefault } from "../../reducer";
import { setLoginDefault } from "../../../LogIn/reducer";
import db from "../../../../utils/database";
import * as ImagePicker from "expo-image-picker";
import CTButton from "../../../../components/CTButton";
import EditImage from "../../../../icons/EditImage";
import DefaultProfileImage from "../../../../icons/DefaultProfileImage";
import styles from "./styles";

const Header = ({ navigation }) => {
  const { image, name, position, email, skype, phone } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPermission = async () => {
      const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(galleryPermission.status !== "granted")
        Alert.alert("Permission Denied!", "Photo change is not avaliable because permission is denied!!!");
    };

    getPermission();
  }, [])

  const getImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true
    });

    if(!result.canceled) { 
      dispatch(setImage(result.assets[0].base64));
    }
  };

  const logOutHandler = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM users WHERE email = ?;",
          [email],
          (tx, results) => {
            const object = makeUserObjectFromObject(results.rows._array[0]);
            const stateObj = makeUserObjectFromValues(image, name, email, phone, position, skype);
            if(JSON.stringify(object) !== JSON.stringify(stateObj)) {
              Alert.alert("Exit confirmation", "If you will log out, changed data will not be saved", [
                {
                  text: "OK",
                  onPress: () => {
                    dispatch(setLoginDefault());
                    navigation.navigate("login");
                  }
                },
                {
                  text: "Cancel",
                  onPress: () => {}
                }
              ]);
            } else {
              dispatch(setDefault());
              dispatch(setLoginDefault());
              navigation.navigate("login");
            }
          },
          (tx, error) => console.log("SELECT Error => ", error)
        );
      });
    } catch(error) {
      console.log(error);
    };
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerControlsContainer}>
        <Text style={styles.headerControlsText}>Edit Profile</Text>
        <CTButton title={"Log Out"}
          containerStyles={styles.headerControlsButtonContainer}
          titleStyles={styles.headerControlsButtonText}
          onPress={logOutHandler}
          />
      </View>
      <TouchableOpacity style={styles.editImageContainer} onPress={getImageHandler}>
        {image ? <Image source={{uri: `data:image/jpeg;base64,${image}`}} style={styles.image}/> :
          <DefaultProfileImage height={70} width={70} />}
        <EditImage height={24} width={24} style={styles.changeImageIcon}/>
      </TouchableOpacity>
      <Text style={styles.nameText}>{name ? name : "Input your name..."}</Text>
      <Text style={styles.positionText}>{position ? position : "Input your position..."}</Text>
    </View>
  );
};

export default Header;