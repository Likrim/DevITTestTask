import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        marginTop: 40,
        zIndex: 10000
    },
    titleText: {
        color: "#9795A4",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21,
        marginBottom: 15
    },
    inputsContainer: {
        width: "100%",
        overflow: "visible",
        flexDirection: "row"
    },
    textInput: {
        flex: 1,
        borderRadius: 15,
        borderColor: "#D7D7D7",
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 10,
        color: "#9795A4",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500"
    },
    dropdown: {
        borderColor: "#D7D7D7",
        borderRadius: 15
    },
    dropContainer: {
        width: 93
    },
    dropDownText: {
        width: "100%", 
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: "#9795A4"
    }
});

export default styles;