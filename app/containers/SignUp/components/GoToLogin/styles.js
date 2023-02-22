import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center"
    },
    text: {
        color: "#9795A4",
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500"
    },
    buttonContainer: {
        backgroundColor: "transparent",
        paddingVertical: 0,
        width: "auto"
    },
    buttonText: {
        color: "#FFC612",
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500"
    }
});

export default styles;