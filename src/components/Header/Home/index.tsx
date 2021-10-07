import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";

import users from "../../../fakeDatas/users";

import styles from "./style";

const HomeHeader = () => {
    const [isActive, setIsActive] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");

    const onChangeText = (text: string) => {
        setSearch(text);
    };
    const onClear = () => {
        setSearch("");
    };
    const onCancel = () => {
        setSearch("");
    };
    const onEndEditing = () => {
        console.log(search);
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
            <SearchBar // add our own searchbar
                platform="default"
                lightTheme={false}
                {...{ onClear }}
                {...{ onCancel }}
                placeholder="Search"
                {...{ onChangeText }}
                value={search}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                selectionColor="white"
                {...{ onEndEditing }}
            />
        </View>
    );
};

export default HomeHeader;
