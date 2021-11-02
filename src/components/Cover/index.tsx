import React, { useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SubRoutes } from "../../router/routes";
import { SubCover as SubCoverType } from "../../types/subCover";
import { ApiPostSubscribeRequest } from "../../services/ApiRequest";
import { useAuthAccessToken } from "../../context/AuthContext";
import { Subscribe as SubscribeType } from "../../types/subscribe";

import styles from "./style";

interface CoverProps {
    subCoverContent: SubCoverType;
    navigation: NativeStackNavigationProp<SubRoutes, "SubContent">;
}

const Cover = ({ subCoverContent, navigation }: CoverProps) => {
    const { accessToken } = useAuthAccessToken();
    const [isSub, setIsSub] = useState<boolean>(subCoverContent.isSub);

    const onPressArrow = () => {
        navigation.goBack();
    };

    const onPressSub = async () => {
        const subscribeData: SubscribeType = {
            action: isSub ? 'unsub' : 'sub',
            sr_name: subCoverContent.subRedditName.replace('r/', ''),
        };
        try {
            const response = await ApiPostSubscribeRequest(`/api/subscribe?action=${subscribeData.action}&sr_name=${subscribeData.sr_name}`, accessToken || "");
        } catch (e) {
            console.log(e.errors);
        }
        setIsSub(!isSub);
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <ImageBackground source={{ uri: subCoverContent.imageBackground }} style={styles.imageBackground}>
                    <TouchableOpacity onPress={onPressArrow}>
                        <AntDesign name="arrowleft" color="white" size={20} style={styles.icon} />
                    </TouchableOpacity>
                    <Image
                        source={{
                            uri: subCoverContent.profilePicture,
                        }}
                        style={styles.image}
                    />
                </ImageBackground>
            </View>
            <View style={[styles.row, styles.spaceBetween]}>
                <Text style={styles.redditName}>{subCoverContent.subRedditName}</Text>
                <TouchableOpacity style={styles.button} onPress={onPressSub} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>{isSub ? "Leaved" : "Joined"}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.row, { marginLeft: "3%" }]}>
                <Text style={styles.info}>{subCoverContent.nbSub} Users subscribed</Text>
            </View>
            <Text style={styles.description} numberOfLines={4}>
                {subCoverContent.description}
            </Text>
        </View>
    );
};

export default Cover;
