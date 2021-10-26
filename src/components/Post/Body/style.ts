import { StyleSheet, Dimensions } from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: { backgroundColor: StyleGuide.palette.background },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
        marginTop: 10,
    },
    video: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
        marginTop: 10,
    },
    textContentView: { marginHorizontal: 8, marginTop: 8 },
    textContent: {
        fontSize: 12,
        color: "grey",
    },
});

export default styles;
