import { StyleSheet } from "react-native";
import StyleGuide from "../../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: 100,
    },
    profilePicturePosition: { marginLeft: 25, marginTop: 44 },
    profilePicture: { borderRadius: 1000, borderWidth: 1, width: 36, height: 36, position: "relative" },
    searchBarContainer: {
        marginTop: 45,
        marginRight: 15,
        width: "75%",
        height: 38,
        borderRadius: 10,
        backgroundColor: StyleGuide.palette.backgroundPrimary,
    },
    input: { color: "white" },
    active: {
        position: "absolute",
        backgroundColor: "green",
        height: 7,
        width: 7,
        borderRadius: 100,
        marginTop: 25,
        marginLeft: 28,
        borderWidth: 1,
        borderColor: StyleGuide.palette.background,
    },
});

export default styles;
