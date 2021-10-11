import { StyleSheet } from "react-native";
import StyleGuide from "../../../constants/StyleGuide";
import Dimensions from "../../../constants/Dimensions";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        marginTop: 5,
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    touchable: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 10,
    },
    text: {
        marginLeft: 4,
        fontSize: 10,
        color: "grey",
    },
    modal: {
        height: (Dimensions.screenHeight * 36) / 100,
        backgroundColor: StyleGuide.palette.background,
        borderRadius: 10,
        top: (Dimensions.screenHeight * 30) / 100,
    },
    modalText: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 10,
        color: "grey",
    },
    separator: {
        marginTop: 15,
        marginBottom: 20,
        marginLeft: "4%",
        backgroundColor: "#545458",
        opacity: 0.65,
        width: "92%",
        height: 0.5,
    },
    touchableModal: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginLeft: 5,
    },
});

export default styles;
