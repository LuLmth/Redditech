import { StyleSheet } from "react-native";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    activityIndicator: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        borderRadius: 15,
        padding: 12,
        backgroundColor: StyleGuide.palette.primary,
        width: "40%",
        marginLeft: "30%",
        marginTop: 20,
    },
    buttonText: {
        ...StyleGuide.typography.headline,
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
    },
    row: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    switchText: {
        marginLeft: "15%",
        fontWeight: "bold",
        fontSize: 14,
        color: "white",
        alignSelf: "center",
    },
    switch: { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginRight: "15%" },
});

export default styles;
