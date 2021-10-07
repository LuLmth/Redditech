import { StyleSheet } from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    profilePicturePosition: { width: 35, height: 35, marginLeft: 25, marginTop: 45 },
    profilePicture: { borderRadius: 46, borderWidth: 1 },
    searchBarContainer: {
        marginTop: 45,
        width: "83%",
        borderStyle: "dashed",
    },
    inputContainer: { height: 35, borderRadius: 10 },
    input: { color: "white" },
    active: {
        backgroundColor: "green",
        height: 6,
        width: 6,
        borderRadius: 2,
        marginTop: 25,
        marginLeft: 28,
        borderWidth: 1,
        borderColor: StyleGuide.palette.background,
    },
});

export default styles;
