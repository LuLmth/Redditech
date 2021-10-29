import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    username: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        alignSelf: "center",
    },
    info: {
        marginTop: 15,
        fontSize: 14,
        color: "white",
        textAlign: "center",
    },
    description: {
        marginTop: 15,
        marginHorizontal: 25,
        fontSize: 14,
        color: "grey",
        textAlign: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default styles;
