import { StyleSheet } from "react-native";
import StyleGuide from "../../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        color: "grey",
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
    },
    footerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    comment: {
        marginTop: 4,
    },
    separator: {
        backgroundColor: "black",
        padding: 4,
    },
});

export default styles;
