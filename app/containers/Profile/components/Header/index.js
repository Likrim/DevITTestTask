import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../../reducer";
import * as ImagePicker from "expo-image-picker";
import CTButton from "../../../../components/CTButton";
import EditImage from "../../../../icons/EditImage";
import DefaultProfileImage from "../../../../icons/DefaultProfileImage";
import styles from "./styles";

const Header = () => {
  const { image } = useSelector(state => state.profile);
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
    console.warn("LogOut Button Pressed!");
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
      <Text style={styles.nameText}>Mike Tyson</Text>
      <Text style={styles.positionText}>UI/UX Designer</Text>
    </View>
  );
};

export default Header;