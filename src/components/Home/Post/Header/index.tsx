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
                <ProfilePicture
                    uri={
                        headerContent.profilePicture ||
                        "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s320x320/117369700_726723337887188_4821703186796244719_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=kATYaWwlCUoAX_rBqC8&edm=ABfd0MgBAAAA&ccb=7-4&oh=7b9fd00e1418470cf0da39c203ed24d3&oe=61640BC1&_nc_sid=7bff83"
                    }
                />
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
