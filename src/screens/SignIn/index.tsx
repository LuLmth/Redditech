import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { LaunchRoutes } from "../../router/routes";

import StyleGuide from "../../constants/StyleGuide";
import styles from "./style";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
    const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();
    const discovery = {
        authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
        tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    };
    const [request, response, PressToSignIn] = useAuthRequest(
        {
            responseType: ResponseType.Token,
            clientId: 'NwbQxUB144Is0B_ZuBAYxw',
            scopes: ['identity', 'history', 'account', 'read'],
            redirectUri: makeRedirectUri({
                scheme: 'exp://n3-vpf.anonymous.b-dev-501-bdx-5-1-redditech-alexandre-lacoste.exp.direct:80',
            }),
        },
        discovery,
    );

    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;

            console.log('Access token =>', access_token);
            navigate('tabNavigator');
        }
    }, [response]);

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
            <TouchableOpacity style={styles.button} onPress={() => { PressToSignIn(); }} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignIn;
