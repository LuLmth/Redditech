import { StyleSheet } from "react-native";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
    },
    rowView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    right: {
        marginRight: 10,
    },
    name: {
        fontWeight: "bold",
        marginLeft: 4,
        fontSize: 11,
        color: "white",
    },
    nbSub: {
        marginLeft: 4,
        fontSize: 11,
        color: "grey",
    },
});

export default styles;
