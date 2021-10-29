import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

interface ProfileInfoProps {
    username: string;
    karma: number;
    created: number;
    description: string;
}

const ProfileInfo = ({ username, karma, created, description }: ProfileInfoProps) => (
    <View>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.row}>
            <Text style={styles.info}>{karma} karma</Text>
            <Text style={styles.info}> • </Text>
            <Text style={styles.info}>{created} d</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
    </View>
);

export default ProfileInfo;
