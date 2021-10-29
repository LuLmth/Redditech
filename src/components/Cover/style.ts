import { StyleSheet } from "react-native";
import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: { height: "25%" },
    image: {
        borderRadius: 1000,
        borderColor: "white",
        borderWidth: 1.5,
        width: 50,
        height: 50,
        marginTop: "6%",
        marginLeft: "4%",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
    },
    background: {
        height: "56%",
    },
    icon: {
        marginTop: 20,
        marginLeft: 10,
    },
    button: {
        marginTop: 7,
        borderRadius: 20,
        padding: 4,
        backgroundColor: StyleGuide.palette.primary,
        width: "18%",
        marginRight: "5%",
    },
    buttonText: {
        fontSize: 14,
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
    },
    row: {
        marginTop: 4,
        flexDirection: "row",
    },
    spaceBetween: {
        justifyContent: "space-between",
    },
    redditName: {
        marginLeft: "3%",
        marginTop: 7,
        fontWeight: "bold",
        fontSize: 14,
        color: "white",
        alignSelf: "center",
    },
    info: {
        fontSize: 10,
        color: "grey",
        textAlign: "center",
    },
    description: {
        marginTop: 4,
        marginLeft: "3%",
        fontSize: 11,
        color: "white",
    },
});

export default styles;
