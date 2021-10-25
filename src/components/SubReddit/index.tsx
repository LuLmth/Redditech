import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import ProfilePicture from "../ProfilePicture";
import { SubReddit as SubRedditType } from "../../types/sub";

import styles from "./style";

interface SubRedditProps {
    subRedditContent: SubRedditType;
}

const SubReddit = ({ subRedditContent }: SubRedditProps) => (
    <View style={styles.container}>
        <View style={styles.rowView}>
            <View style={styles.left}>
                <ProfilePicture uri={subRedditContent.profilePicture} />
                <View>
                    <Text style={styles.name}>{subRedditContent.subRedditName}</Text>
                    <Text style={styles.nbSub}>
                        {subRedditContent.nbSub} subs
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <AntDesign name="arrowright" color="grey" size={14} />
            </View>
        </View>
    </View>
);

export default SubReddit;
