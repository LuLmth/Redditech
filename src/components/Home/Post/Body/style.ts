import { StyleSheet, Dimensions } from "react-native";
import StyleGuide from "../../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: { backgroundColor: StyleGuide.palette.background },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
        marginTop: 10,
    },
});

export default styles;
