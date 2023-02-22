import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginTop: 30
    },
    titleText: {
        color: "#9795A4",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21
    },
    textInputContainer: {
        flexDirection: "row",
        borderColor: "#D7D7D7",
        borderBottomWidth: 1,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        height: 40
    },
    icon: {
        width: 18,
        height: 18
    }
});

export default styles;