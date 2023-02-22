import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLogo from "../../icons/MainLogo";
import styles from "./styles";

const Header = ({ title }) => {
  const paddingTopHeaderText = useSelector((state) => state.login.paddingTopHeaderText);
  const paddingBottomHeaderText = useSelector((state) => state.login.paddingBottomHeaderText);

  return (
    <View style={styles.headerContainer}>
      <MainLogo height={Dimensions.get("window").height * 1 / 10}/>
      <Text style={[styles.headerText, {paddingTop: paddingTopHeaderText, paddingBottom: paddingBottomHeaderText}]}>
        {title}
      </Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;