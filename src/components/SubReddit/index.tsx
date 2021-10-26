import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import ProfilePicture from "../ProfilePicture";
import { SubReddit as SubRedditType } from "../../types/sub";
import { SubRoutes } from "../../router/routes";

import styles from "./style";

interface SubRedditProps {
    subRedditContent: SubRedditType;
}

const SubReddit = ({ subRedditContent }: SubRedditProps) => {
    const { navigate } = useNavigation<StackNavigationProp<SubRoutes, "Sub">>();
    const onPress = () => {
        navigate("SubContent", { uri: subRedditContent.url } );
    };

    return (
        <View style={styles.container}>
            <View style={styles.separator} />
            <TouchableOpacity {...{ onPress }}>
                <View style={styles.rowView}>
                    <View style={styles.left}>
                        <ProfilePicture uri={subRedditContent.profilePicture} />
                        <View>
                            <Text style={styles.name}>{subRedditContent.subRedditName}</Text>
                            <Text style={styles.nbSub}>{subRedditContent.nbSub} subs</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <AntDesign name="arrowright" color="grey" size={14} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SubReddit;
