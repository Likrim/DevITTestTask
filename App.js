import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./app/utils/store";
import db from "./app/utils/database";
import StackNavigator from "./app/routes/StackNavigator";
import styles from "./Styles";

const App = () => {
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM users;", [], (tx, results) => console.log(results.rows._array));
    })
  }, []);

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