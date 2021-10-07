import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";

import users from "../../../fakeDatas/users";

import styles from "./style";

const HomeHeader = () => {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");

    const onChangeText = (text: string) => {
        setSearch(text);
    };
    const onSubmitEditing = () => {
        // console.log(search);
        // TODO: call API
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsActive(!isActive);
                }}
            >
                <ImageBackground
                    source={{ uri: users[0].profilePicture }}
                    resizeMode="contain"
                    style={styles.profilePicturePosition}
                    imageStyle={styles.profilePicture}
                >
                    {isActive && <View style={styles.active} />}
                </ImageBackground>
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

export default HomeHeader;
