import { StyleSheet } from "react-native";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
    },
    rowView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 5 },
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
    separator: {
        backgroundColor: "black",
        padding: 2,
    },
});

export default styles;
