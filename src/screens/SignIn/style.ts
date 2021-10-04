import { StyleSheet } from "react-native";

import StyleGuide from "../../constants/StyleGuide";
import Dimensions from "../../constants/Dimensions";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
        flex: 1,
    },
    title: {
        ...StyleGuide.typography.headline,
    },
    // inputUsername: {
    //     height: 40,
    //     marginTop: (Dimensions.screenHeight * 15) / 100,
    //     marginBottom: 20,
    //     marginHorizontal: (Dimensions.screenWidth * 10) / 100,
    //     borderWidth: 1,
    //     borderColor: "#FFFFFF",
    //     padding: 10,
    //     borderRadius: 15,
    //     color: "#FFFFFF",
    // },
    // inputPassword: {
    //     height: 40,
    //     marginBottom: 20,
    //     marginHorizontal: (Dimensions.screenWidth * 10) / 100,
    //     borderWidth: 1,
    //     borderColor: "#FFFFFF",
    //     padding: 10,
    //     borderRadius: 15,
    //     color: "#FFFFFF",
    // },
    image: {
        marginTop: (Dimensions.screenHeight * 15) / 100,
        width: Dimensions.screenWidth,
        height: 125,
        resizeMode: "contain",
    },
    button: {
        borderRadius: 15,
        padding: 7,
        backgroundColor: StyleGuide.palette.primary,
        position: "absolute",
        bottom: 0,
        width: "86%",
        marginLeft: "7%",
        marginBottom: 75,
    },
});

export default styles;
