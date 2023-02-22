import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingBottom: 20,
        paddingTop: 50,
        alignItems: "center",
    },
    textInputContainer: {
        flexDirection: "column",
        width: "100%",
        alignItems: "center"
    },
    forgotPasswordButton: {
        alignSelf: "flex-end",
        marginTop: 15
    },
    forgotPasswordButtonText: {
        fontSize: 14,
        lineHeight: 21,
        color: "#9795A4",
        fontWeight: "400"
    },
    createAccountContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    bottomControlContainer: {
        width: "100%",
        alignItems: "center"
    },
    nonPressebleText: {
        color: "#9795A4",
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500"
    },
    pressebleText: {
        color: "#FFC612",
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500"
    }
});

export default styles;