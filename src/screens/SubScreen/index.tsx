import React from "react";
import { SafeAreaView } from "react-native";
import Sub from "../../components/Sub";

import styles from "./style";

const SubScreen = () => (
    <SafeAreaView style={styles.container}>
        <Sub />
    </SafeAreaView>
);

export default SubScreen;
