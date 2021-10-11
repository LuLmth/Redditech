import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Footer as FooterType } from "../../../../fakeDatas/posts";
import styles from "./style";

interface FooterProps {
    footerContent: FooterType;
}

const Footer = ({ footerContent }: FooterProps) => (
    <>
        <View style={styles.container}>
            <View style={styles.footerView}>
                <MaterialCommunityIcons name="arrow-up-bold-outline" color="grey" size={20} />
                <Text style={styles.text}>{footerContent.like}</Text>
                <MaterialCommunityIcons name="arrow-down-bold-outline" color="grey" size={20} />
                <Text style={styles.text}>{footerContent.dislike}</Text>
                <FontAwesome5 name="comment-alt" color="grey" size={16} style={styles.comment} />
                <Text style={styles.text}>{footerContent.comment}</Text>
                <Ionicons name="ios-share-social-outline" color="grey" size={20} />
                <Text style={styles.text}>Share</Text>
                <Ionicons name="ios-gift-outline" color="grey" size={20} />
                <Text style={styles.text}>Award</Text>
            </View>
        </View>
        <View style={styles.separator} />
    </>
);

export default Footer;
