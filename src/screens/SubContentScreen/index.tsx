import React from "react";
import { SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SubRoutes } from "../../router/routes";
import SubContent from "../../components/SubContent";

import styles from "./style";

type SubContentScreenProps = NativeStackScreenProps<SubRoutes, 'SubContent'>; // TODO: do interface

const SubContentScreen = ({ route, navigation }: SubContentScreenProps) => {
    const { uri } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <SubContent {...{ uri }} {...{ navigation }} />
        </SafeAreaView>
    );
};

export default SubContentScreen;
