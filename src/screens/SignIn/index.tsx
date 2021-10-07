import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import { LaunchRoutes } from "../../router/routes";

import StyleGuide from "../../constants/StyleGuide";
import styles from "./style";

const SignIn = () => {
    const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();
    // const [username, setUsername] = useState<string | undefined>(undefined);
    // const [password, setPassword] = useState<string | undefined>(undefined);

    // const onChangeTextUsername = (newUsername: string) => {
    //     setUsername(newUsername);
    // };

    // const onChangeTextPassword = (newPassword: string) => {
    //     setPassword(newPassword);
    // };

    const onPress = () => {
        // if (call API okk) {}
        navigate("tabNavigator");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/reddit-logo.png")} style={styles.image} />
            {/* <TextInput
                style={styles.inputUsername}
                value={username}
                placeholder="Username"
                placeholderTextColor="grey"
                selectionColor="white"
                keyboardType="default"
                onChangeText={onChangeTextUsername}
            />
            <TextInput
                style={styles.inputPassword}
                value={password}
                placeholder="Password"
                placeholderTextColor="grey"
                selectionColor="white"
                keyboardType="default"
                onChangeText={onChangeTextPassword}
            /> */}
            <TouchableOpacity style={styles.button} {...{ onPress }} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignIn;
