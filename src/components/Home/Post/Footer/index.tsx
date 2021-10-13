import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Footer as FooterType } from "../../../../fakeDatas/posts";
import styles from "./style";

interface FooterProps {
    footerContent: FooterType;
}

const Footer = ({ footerContent }: FooterProps) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isDisliked, setIsDisliked] = useState<boolean>(false);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() => {
                            if (isLiked) {
                                setIsLiked(false);
                            } else {
                                setIsLiked(true);
                                setIsDisliked(false);
                            }
                        }}
                    >
                        <MaterialCommunityIcons
                            name={isLiked ? "arrow-up-bold" : "arrow-up-bold-outline"}
                            color={isLiked ? "#FF4400" : "grey"}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>{footerContent.like + (isLiked ? 1 : 0)}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (isDisliked) {
                                setIsDisliked(false);
                            } else {
                                setIsLiked(false);
                                setIsDisliked(true);
                            }
                        }}
                    >
                        <MaterialCommunityIcons
                            name={isDisliked ? "arrow-down-bold" : "arrow-down-bold-outline"}
                            color={isDisliked ? "#18adec" : "grey"}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>{footerContent.dislike + (isDisliked ? 1 : 0)}</Text>
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
};

export default Footer;
