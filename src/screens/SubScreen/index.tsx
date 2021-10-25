import React from "react";
import { SafeAreaView } from "react-native";
import SubRedditList from "../../components/SubRedditList";

import styles from "./style";

const SubScreen = () => (
    <SafeAreaView style={styles.container}>
        <SubRedditList />
    </SafeAreaView>
);

export default SubScreen;
