import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { LaunchRoutes } from "../../router/routes";

import styles from "./style";

const SignIn = () => {
    const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();

    const onPress = () => {
        // TODO: if (call API okk) {} 
        navigate("tabNavigator");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/reddit-logo.png")} style={styles.image} />
            <TouchableOpacity style={styles.button} {...{ onPress }} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignIn;
