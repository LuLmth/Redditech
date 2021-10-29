import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import Avatar from "../Avatar";
import ProfileInfo from "../ProfileInfo";
import { Profile as ProfileType } from "../../types/profile";
import { ApiGetRequest } from "../../services/ApiRequest";
import { useAuthAccessToken } from "../../context/AuthContext";

import styles from "./style";

const Profile = () => {
    const { accessToken } = useAuthAccessToken();
    const [profile, setProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await ApiGetRequest(`/api/v1/me?raw_json=1`, accessToken || "");
                const createdProfileDate = new Date(profileData.created * 1000);
                const diffDays = (new Date().getTime() - createdProfileDate.getTime()) / (1000 * 3600 * 24);
                const profileCompleted: ProfileType = {
                    profilePicture: profileData.subreddit.icon_img,
                    username: profileData.subreddit.display_name_prefixed,
                    karma: profileData.total_karma,
                    days: Math.round(diffDays),
                    description: profileData.subreddit.public_description,
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
        <View>
            <Avatar uri={profile.profilePicture} />
            <ProfileInfo username={profile.username} karma={profile.karma} created={profile.days} description={profile.description} />
        </View>
    );
};

export default Profile;
