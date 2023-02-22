import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const CTButton = ({ title, containerStyles, titleStyles, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}
      style={[styles.buttonContainer, containerStyles]}>
      <Text
        style={[styles.buttonTitle, titleStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

CTButton.propTypes = {
  title: PropTypes.string,
  containerStyles: PropTypes.object,
  titleStyles: PropTypes.object,
  onPress: PropTypes.func
};

export default CTButton;