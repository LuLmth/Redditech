import React from "react";
import { Text, SafeAreaView } from "react-native";
import Filter from "../../components/Filter";

import styles from "./style";

const HomeScreen = () => (
    <SafeAreaView style={styles.container}>
        <Filter />
    </SafeAreaView>
);

export default HomeScreen;
