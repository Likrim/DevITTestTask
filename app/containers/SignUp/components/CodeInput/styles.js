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
        lineHeight: 21,
        marginBottom: 15
    },
    inputsContainer: {
        flexDirection: 'row',
        columnGap: 10,
        marginLeft: -8
    },
    textInput: {
        borderRadius: 15,
        borderWidth: 1,
        width: 48,
        height: 48,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        marginHorizontal: 8,
        textAlign: "center"
    }
});

export default styles;