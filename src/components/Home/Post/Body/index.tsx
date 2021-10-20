import React from "react";
import { Image, View } from "react-native";
import { Body as BodyType, bodyFormat } from "../../../../types/post";

import styles from "./style";

interface BodyProps {
    bodyContent: BodyType;
}

const Body = ({ bodyContent }: BodyProps) => {
    if (bodyContent.uri === null) {
        return <></>;
    }

    return (
        <View style={styles.container}>
            {bodyContent.format === bodyFormat.png && <Image source={{ uri: bodyContent.uri }} style={styles.image} />}
        </View>
    );
};

export default Body;
