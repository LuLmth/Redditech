import { StyleSheet } from "react-native";
import Dimensions from "../../constants/Dimensions";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        paddingTop: "20%",
    },
    image: {
        alignSelf: "center",
        borderRadius: 1000,
        borderColor: StyleGuide.palette.primary,
        borderWidth: 2,
        width: Dimensions.screenWidth / 2,
        height: Dimensions.screenWidth / 2,
    },
    activityIndicator: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
