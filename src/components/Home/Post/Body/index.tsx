import React, { useRef, useState } from "react";
import { View, Easing, TouchableWithoutFeedback } from "react-native";
import ZoomImage from "react-native-zoom-image";
import Video from "react-native-video";
import { Body as BodyType, bodyFormat } from "../../../../types/post";

import styles from "./style";

interface BodyProps {
    bodyContent: BodyType;
}

const Body = ({ bodyContent }: BodyProps) => {
    const videoRef = useRef<Video>(null);
    const [isPaused, setisPaused] = useState(false);

    if (bodyContent.uri === null || bodyContent.format === bodyFormat.none) {
        return <></>;
    }

    const onPress = () => {
        setisPaused(!isPaused);
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
            {bodyContent.format === bodyFormat.mp4 && (
                <TouchableWithoutFeedback {...{ onPress }}>
                    <Video
                        ref={videoRef}
                        source={{ uri: bodyContent.uri }}
                        repeat
                        style={styles.video}
                        resizeMode="cover"
                        paused={isPaused}
                        onSeek={() => setisPaused(true)}
                    />
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};

export default Body;
