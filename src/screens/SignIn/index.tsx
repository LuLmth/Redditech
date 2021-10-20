import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, ResponseType, useAuthRequest } from "expo-auth-session";
import { REDDIT_CLIENT_ID, REDDIT_REDIRECT } from "react-native-dotenv";
import { saveValue } from "../../services/SecureStore";
import { LaunchRoutes } from "../../router/routes";

import StyleGuide from "../../constants/StyleGuide";
import styles from "./style";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
    const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();
    const authDiscovery = {
        authorizationEndpoint: "https://www.reddit.com/api/v1/authorize.compact",
        tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
    };
    const [, responseAuth, PressToSignIn] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: REDDIT_CLIENT_ID || "",
            scopes: ["identity", "history", "account", "read"],
            redirectUri: makeRedirectUri({
                scheme: REDDIT_REDIRECT || "",
            }),
        },
        authDiscovery,
    );

    useEffect(() => {
        if (responseAuth?.type === "success") {
            const { access_token } = responseAuth.params;

            saveValue("accessToken", access_token);
            navigate("tabNavigator");
        }
    }, [responseAuth]);

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
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    PressToSignIn();
                }}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignIn;
