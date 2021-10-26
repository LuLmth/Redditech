import React, { useRef, useState } from "react";
import { View, Easing, TouchableWithoutFeedback, Text } from "react-native";
import ZoomImage from "react-native-zoom-image";
import { AVPlaybackStatus, Video } from "expo-av";
import { Body as BodyType, bodyFormat } from "../../../types/post";

import styles from "./style";

interface BodyProps {
    bodyContent: BodyType;
}

const Body = ({ bodyContent }: BodyProps) => {
    const videoRef = useRef<Video>(null);
    const [status, setStatus] = useState<AVPlaybackStatus>();

    const onPress = () => {
        !status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
    };

    return (
        <View style={styles.container}>
            {(bodyContent.format === bodyFormat.png || bodyContent.format === bodyFormat.gif) && (
                <ZoomImage
                    source={{ uri: bodyContent.uri }}
                    imgStyle={styles.image}
                    duration={200}
                    enableScaling
                    easingFunc={Easing.ease}
                />
            )}
            {bodyContent.uri !== null && bodyContent.format === bodyFormat.mp4 && (
                <TouchableWithoutFeedback {...{ onPress }}>
                    <Video
                        ref={videoRef}
                        source={{ uri: bodyContent.uri }}
                        style={styles.video}
                        resizeMode="contain"
                        isLooping
                        useNativeControls
                        onPlaybackStatusUpdate={(stat) => setStatus(() => stat)}
                    />
                </TouchableWithoutFeedback>
            )}
            {bodyContent.format === bodyFormat.text && (
                <View style={styles.textContentView}>
                    <Text style={styles.textContent} numberOfLines={4}>{bodyContent.textContent}</Text>
                </View>
            )}
        </View>
    );
};

export default Body;
