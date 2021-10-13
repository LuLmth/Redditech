import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";

import styles from "./style";

const Avatar = () => {
    const [username, setUsername] = useState<string | null>(); // TODO: call API for username

    useEffect(() => {
        setUsername("IamDecoste");
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://styles.redditmedia.com/t5_amu6y/styles/profileIcon_snooa98a06fc-adfa-42df-aa89-63c512f0e5ba-headshot-f.png?width=256&height=256&crop=256:256,smart&s=f328168f68229b98ee15dacfceaca8a5b81ad142",
                }}
                style={styles.image}
            />
            <Text style={styles.username}>{username}</Text>
        </View>
    );
};

export default Avatar;
