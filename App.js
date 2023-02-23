import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./app/utils/store";
import StackNavigator from "./app/routes/StackNavigator";
import styles from "./Styles";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;