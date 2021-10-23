import React, { useState, useEffect } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { ApiGetRequest } from "../../services/ApiRequest";
import { getValue } from "../../services/SecureStore";
import { Profile as ProfileType } from "../../types/profile";

import styles from "./style";

const Avatar = () => {
    // TODO: call API for getting profile properties
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [profile, setProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getValue("accessToken");
                setAccessToken(token);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchToken();
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await ApiGetRequest(`/api/v1/me?raw_json=1`, accessToken || "");
                const profileCompleted: ProfileType = {
                    profilePicture: profileData.icon_img,
                    username: profileData.name,
                    karma: profileData.total_karma,
                };

                setProfile(profileCompleted);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchProfile();
    }, [accessToken]);

    if (!profile) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: profile.profilePicture,
                }}
                style={styles.image}
            />
            <Text style={styles.username}>{profile.username}</Text>
            <Text style={styles.username}>Karma: {profile.karma}</Text>
        </View>
    );
};

export default Avatar;
