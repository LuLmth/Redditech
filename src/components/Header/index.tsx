import React, { useEffect, useState } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { useAuthAccessToken } from "../../context/AuthContext";

import { ApiGetRequest } from "../../services/ApiRequest";

import styles from "./style";

const Header = () => {
    const { accessToken } = useAuthAccessToken();
    const [isActive, setIsActive] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [profileImage, setProfileImage] = useState<string>("");

    const onChangeText = (text: string) => {
        setSearch(text);
    };

    const onSubmitEditing = async () => {
        // try {
        //     const searchSubredditData = await ApiGetRequest(`/subreddits/search?q=${search || ''}`, accessToken || "");
        //     console.log(searchSubredditData);
        // } catch (e) {
        //     console.log(e.errors);
        // }
        // TODO: call API
    };

    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const profileData = await ApiGetRequest(`/api/v1/me?raw_json=1`, accessToken || "");
                setProfileImage(profileData.subreddit.icon_img);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchProfileImage();
    }, [accessToken]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsActive(!isActive);
                }}
            >
                {profileImage !== "" && (
                    <ImageBackground
                        source={{ uri: profileImage }}
                        resizeMode="contain"
                        style={styles.profilePicturePosition}
                        imageStyle={styles.profilePicture}
                    >
                        {isActive && <View style={styles.active} />}
                    </ImageBackground>
                )}
            </TouchableOpacity>
            <Searchbar
                placeholder="Search"
                {...{ onChangeText }}
                value={search}
                inputStyle={styles.input}
                selectionColor="white"
                placeholderTextColor="grey"
                {...{ onSubmitEditing }}
                style={styles.searchBarContainer}
                iconColor="grey"
            />
        </View>
    );
};

export default Header;
