import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

export default styles;