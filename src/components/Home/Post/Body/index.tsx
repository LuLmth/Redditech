import React from "react";
import { Image, View } from "react-native";

import styles from "./style";

interface BodyProps {
    imageUri: string;
}

const Body = ({ imageUri }: BodyProps) => (
    <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
);

export default Body;
