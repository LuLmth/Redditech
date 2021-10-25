import React from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ProfilePicture from "../../../ProfilePicture";
import { Header as HeaderType } from "../../../../types/post";

import styles from "./style";

interface HeaderProps {
    headerContent: HeaderType;
}

const Header = ({ headerContent }: HeaderProps) => (
    <View style={styles.container}>
        <View style={styles.rowView}>
            <View style={styles.left}>
                <ProfilePicture uri={headerContent.profilePicture} />
                <View>
                    <Text style={styles.name}>{headerContent.username}</Text>
                    <Text style={styles.postedBy}>
                        Posted by {headerContent.username} - {headerContent.postedTimed}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <Entypo name="dots-three-vertical" color="grey" size={14} />
            </View>
        </View>
        <View style={styles.title}>
            <Text style={styles.titleText}>{headerContent.title}</Text>
        </View>
    </View>
);

export default Header;
