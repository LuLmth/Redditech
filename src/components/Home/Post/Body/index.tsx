import React, { useRef, useState } from "react";
import { View, Easing, TouchableWithoutFeedback } from "react-native";
import ZoomImage from "react-native-zoom-image";
import { Video } from "expo-av";
import { Body as BodyType, bodyFormat } from "../../../../types/post";

import styles from "./style";

interface BodyProps {
    bodyContent: BodyType;
}

const Body = ({ bodyContent }: BodyProps) => {
    const videoRef = useRef<Video>(null);
    const [status, setStatus] = useState({});

    console.log("Format:", bodyContent.format, "URI:", bodyContent.uri);
    if (bodyContent.uri === null || bodyContent.uri === undefined || bodyContent.format === bodyFormat.none) {
        return <></>;
    }

    const onPress = () => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
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
            {bodyContent.format === bodyFormat.mp4 && bodyContent.uri !== undefined && (
                <TouchableWithoutFeedback {...{ onPress }}>
                    <Video
                        ref={videoRef}
                        source={{ uri: bodyContent.uri }}
                        style={styles.video}
                        resizeMode="contain"
                        isLooping
                        useNativeControls
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

export default Body;
