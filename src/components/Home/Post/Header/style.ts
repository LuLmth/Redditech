import { StyleSheet } from "react-native";
import StyleGuide from "../../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
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
    postedBy: {
        marginLeft: 4,
        fontSize: 11,
        color: "grey",
    },
    title: { marginLeft: 8, marginTop: 8 },
    titleText: {
        fontWeight: "bold",
        marginLeft: 4,
        fontSize: 15,
        color: "white",
    },
});

export default styles;
