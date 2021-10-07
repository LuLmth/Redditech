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
        marginRight: 15,
        width: "75%",
        height: 38,
        borderRadius: 10,
        backgroundColor: StyleGuide.palette.backgroundPrimary,
    },
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
