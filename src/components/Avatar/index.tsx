import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

interface AvatarProps {
    uri: string;
}

const Avatar = ({ uri }: AvatarProps) => (
    <View style={styles.container}>
        <Image
            source={{
                uri,
            }}
            style={styles.image}
        />
    </View>
);

export default Avatar;
