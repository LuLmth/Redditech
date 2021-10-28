import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync } from "expo-auth-session";
import { REDDIT_CLIENT_ID, REDDIT_REDIRECT } from "react-native-dotenv";
import { saveValue } from "../../services/SecureStore";
import { LaunchRoutes } from "../../router/routes";

import styles from "./style";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
    const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();
    const authDiscovery = {
        authorizationEndpoint: "https://www.reddit.com/api/v1/authorize.compact",
        tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
    };
    const authConfig = {
        clientId: REDDIT_CLIENT_ID || "",
        clientSecret: "",
        scopes: ["identity", "mysubreddits", "read"],
        redirectUri: makeRedirectUri({
            scheme: REDDIT_REDIRECT || "",
        }),
    };
    const [, responseAuth, PressToSignIn] = useAuthRequest(authConfig, authDiscovery);

    useEffect(() => {
        const getAccessTokenByAuthCode = async () => {
            if (responseAuth?.type === "success") {
                const authCode = responseAuth.params.code;
                const configCode = { code: authCode };
                const { accessToken } = await exchangeCodeAsync(
                    { ...authConfig, ...configCode },
                    authDiscovery,
                );
    
                saveValue("accessToken", accessToken);
                navigate("tabNavigator");
            }
        };
        getAccessTokenByAuthCode();
    }, [responseAuth]);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/reddit-logo.png")} style={styles.image} />
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
