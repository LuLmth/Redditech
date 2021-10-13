import { StyleSheet } from "react-native";
import Dimensions from "../../constants/Dimensions";

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        padding: "20%",
    },
    image: {
        borderRadius: 1000,
        borderColor: "#5e7bfe",
        borderWidth: 1,
        width: Dimensions.screenWidth / 2,
        height: Dimensions.screenWidth / 2,
    },
    username: {
        padding: "5%",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 20,
        color: "white",
        alignSelf: "center",
    },
});

export default styles;
