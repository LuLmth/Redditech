import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import Avatar from "../Avatar";
import ProfileInfo from "../ProfileInfo";
import { Profile as ProfileType } from "../../types/profile";
import { Preference as PreferenceType } from "../../types/preference";
import { ApiGetRequest, ApiPatchRequest } from "../../services/ApiRequest";
import { useAuthAccessToken } from "../../context/AuthContext";

import styles from "./style";

const Profile = () => {
    const { accessToken } = useAuthAccessToken();
    const [profile, setProfile] = useState<ProfileType | null>(null);
    const [preference, setPreference] = useState<PreferenceType | null>(null);

    const updatePreferences = async () => {
        if (!preference) return;

        try {
            await ApiPatchRequest(`/api/v1/me/prefs`, accessToken || "", preference);
        } catch (e) {
            console.log(e.errors);
        }
    };

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
        const fetchProfilePreferences = async () => {
            try {
                const profilePrefData = await ApiGetRequest(`/api/v1/me/prefs?raw_json=1`, accessToken || "");
                const preferences: PreferenceType = {
                    show_presence: profilePrefData.show_presence,
                    over_18: profilePrefData.over_18,
                    email_private_message: profilePrefData.email_private_message,
                    email_user_new_follower: profilePrefData.email_user_new_follower,
                    email_username_mention: profilePrefData.email_username_mention,
                    email_upvote_post: profilePrefData.email_upvote_post,
                };

                setPreference(preferences);
            } catch (e) {
                console.log(e.errors);
            }
        };

        fetchProfile();
        fetchProfilePreferences();
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
