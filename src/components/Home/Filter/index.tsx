import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import styles from "./style";

enum sorted {
    best = "best",
    hot = "hot",
    new = "new",
    top = "top",
    controversial = "controversial",
    rising = "rising",
}

const Filter = () => {
    const [currentFilter, setCurrentFilter] = useState<sorted>(sorted.best);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const onPressFilter = () => {
        setIsModalVisible(!isModalVisible);
    };
    const onBackdropPress = () => {
        setIsModalVisible(!isModalVisible);
    };
    const onSwipeComplete = () => {
        setIsModalVisible(!isModalVisible);
    };
    const onPressModal = (filter: sorted) => {
        if (filter !== currentFilter) {
            setCurrentFilter(filter);
            // TODO: call API with new filter
        }
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={onPressFilter}>
                {currentFilter === sorted.best && (
                    <>
                        <MaterialCommunityIcons name="rocket-outline" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>BEST POST</Text>
                    </>
                )}
                {currentFilter === sorted.hot && (
                    <>
                        <SimpleLineIcons name="fire" color="grey" size={18} style={styles.icon} />
                        <Text style={styles.text}>HOT POST</Text>
                    </>
                )}
                {currentFilter === sorted.new && (
                    <>
                        <MaterialCommunityIcons name="selection-ellipse" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>NEW POST</Text>
                    </>
                )}
                {currentFilter === sorted.top && (
                    <>
                        <MaterialCommunityIcons name="arrow-expand-up" color="grey" size={19} style={styles.icon} />
                        <Text style={styles.text}>TOP POST</Text>
                    </>
                )}
                {currentFilter === sorted.controversial && (
                    <>
                        <MaterialCommunityIcons name="sword" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>CONTROVERSIAL POST</Text>
                    </>
                )}
                {currentFilter === sorted.rising && (
                    <>
                        <MaterialCommunityIcons name="elevation-rise" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>RISING POST</Text>
                    </>
                )}
                <MaterialIcons name="keyboard-arrow-down" color="grey" size={20} />
                <Modal
                    isVisible={isModalVisible}
                    swipeDirection="down"
                    {...{ onBackdropPress }}
                    {...{ onSwipeComplete }}
                    avoidKeyboard
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>SORT POSTS BY</Text>
                        <View style={styles.separator} />
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.best)}>
                            <MaterialCommunityIcons
                                name="rocket-outline"
                                color={currentFilter === sorted.best ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.best ? "white" : "grey" },
                                ]}
                            >
                                Best
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.hot)}>
                            <SimpleLineIcons
                                name="fire"
                                color={currentFilter === sorted.hot ? "white" : "grey"}
                                size={18}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.hot ? "white" : "grey" },
                                ]}
                            >
                                Hot
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.new)}>
                            <MaterialCommunityIcons
                                name="selection-ellipse"
                                color={currentFilter === sorted.new ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.new ? "white" : "grey" },
                                ]}
                            >
                                New
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.top)}>
                            <MaterialCommunityIcons
                                name="arrow-expand-up"
                                color={currentFilter === sorted.top ? "white" : "grey"}
                                size={19}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.top ? "white" : "grey" },
                                ]}
                            >
                                Top
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchableModal}
                            onPress={() => onPressModal(sorted.controversial)}
                        >
                            <MaterialCommunityIcons
                                name="sword"
                                color={currentFilter === sorted.controversial ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.controversial ? "white" : "grey" },
                                ]}
                            >
                                Controversial
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.rising)}>
                            <MaterialCommunityIcons
                                name="elevation-rise"
                                color={currentFilter === sorted.rising ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: currentFilter === sorted.rising ? "white" : "grey" },
                                ]}
                            >
                                Rising
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </TouchableOpacity>
        </View>
    );
};

export default Filter;
