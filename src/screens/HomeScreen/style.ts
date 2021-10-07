import { StyleSheet } from "react-native";

import StyleGuide from "../../constants/StyleGuide";

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleGuide.palette.background,
        flex: 1,
    },
    title: {
        ...StyleGuide.typography.headline,
    },
});

export default styles;