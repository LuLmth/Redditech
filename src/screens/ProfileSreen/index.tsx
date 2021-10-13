import React from "react";
import { SafeAreaView } from "react-native";
import Profile from "../../components/Profile";

import styles from "./style";

const ProfileScreen = () => (
    <SafeAreaView style={styles.container}>
        <Profile />
    </SafeAreaView>
);

export default ProfileScreen;
