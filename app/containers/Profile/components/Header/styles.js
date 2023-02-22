import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        alignItems: "center",
    },
    headerControlsContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    headerControlsText: {
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "500",
        color: "#1F1D1D"
    },
    headerControlsButtonContainer: {
        backgroundColor: "transparent",
        paddingVertical: 0,
        width: "auto",
        position: "absolute",
        right: 0
    },
    headerControlsButtonText: {
        color: "#FFC612",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500"
    },
    editImageContainer: {
        marginTop: 30,
        position: "relative",
        overflow: "hidden"
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    changeImageIcon: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    nameText: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: "500",
        color: "#1F1D1D",
        marginTop: 10,
        marginBottom: 3
    },
    positionText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "500",
        color: "#9795A4"
    }
});

export default styles;