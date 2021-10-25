import { StyleSheet } from "react-native";
import Dimensions from "../../constants/Dimensions";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        padding: "20%",
    },
    image: {
        borderRadius: 1000,
        borderColor: StyleGuide.palette.primary,
        borderWidth: 1,
        width: Dimensions.screenWidth / 2,
        height: Dimensions.screenWidth / 2,
    },
    username: {
        padding: "5%",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 20,
        color: "white",
        alignSelf: "center",
    },
    activityIndicator: {
        padding: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
