import React from "react";
import { Image, View } from "react-native";
import styles from "./style";

interface ProfilePictureProps {
    uri: string;
}

const ProfilePicture = ({ uri }: ProfilePictureProps) => (
    <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} />
    </View>
);

export default ProfilePicture;
