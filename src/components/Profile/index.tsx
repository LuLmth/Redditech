import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text, Switch } from "react-native";
import Avatar from "../Avatar";
import ProfileInfo from "../ProfileInfo";
import { Profile as ProfileType } from "../../types/profile";
import { Preference as PreferenceType } from "../../types/preference";
import { ApiGetRequest, ApiPatchRequest } from "../../services/ApiRequest";
import { useAuthAccessToken } from "../../context/AuthContext";

import styles from "./style";
import StyleGuide from "../../constants/StyleGuide";

const Profile = () => {
    const { accessToken } = useAuthAccessToken();
    const [profile, setProfile] = useState<ProfileType | null>(null);
    const [preference, setPreference] = useState<PreferenceType | null>(null);

    const [isShowPresence, setIsShowPresence] = useState<boolean>(false);
    const [isOver18, setIsOver18] = useState<boolean>(false);
    const [isEmailPrivateMessage, setIsEmailPrivateMessage] = useState<boolean>(false);
    const [isEmailNewFollower, setIsEmailNewFollower] = useState<boolean>(false);
    const [isEmailUsernameMention, setIsEmailUsernameMention] = useState<boolean>(false);
    const [isEmailUpVotePost, setIsEmailUpVotePost] = useState<boolean>(false);

    const updatePreferences = async () => {
        if (!preference) return;

        const preferences: PreferenceType = {
            show_presence: isShowPresence,
            over_18: isOver18,
            email_private_message: isEmailPrivateMessage,
            email_user_new_follower: isEmailNewFollower,
            email_username_mention: isEmailUsernameMention,
            email_upvote_post: isEmailUpVotePost,
        };
        setPreference(preferences);
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
                setIsShowPresence(preferences.show_presence);
                setIsOver18(preferences.over_18);
                setIsEmailPrivateMessage(preferences.email_private_message);
                setIsEmailNewFollower(preferences.email_user_new_follower);
                setIsEmailUsernameMention(preferences.email_username_mention);
                setIsEmailUpVotePost(preferences.email_upvote_post);
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
            <ProfileInfo
                username={profile.username}
                karma={profile.karma}
                created={profile.days}
                description={profile.description}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsShowPresence(!isShowPresence);
                    updatePreferences();
                }}
                value={isShowPresence}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsOver18(!isOver18);
                    updatePreferences();
                }}
                value={isOver18}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsEmailPrivateMessage(!isEmailPrivateMessage);
                    updatePreferences();
                }}
                value={isEmailPrivateMessage}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsEmailNewFollower(!isEmailNewFollower);
                    updatePreferences();
                }}
                value={isEmailNewFollower}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsEmailUsernameMention(!isEmailUsernameMention);
                    updatePreferences();
                }}
                value={isEmailUsernameMention}
            />
            <Switch
                trackColor={{ true: "green", false: "white" }}
                thumbColor={StyleGuide.palette.background}
                ios_backgroundColor="white"
                onValueChange={() => {
                    setIsEmailUpVotePost(!isEmailUpVotePost);
                    updatePreferences();
                }}
                value={isEmailUpVotePost}
            />
        </View>
    );
};

export default Profile;
