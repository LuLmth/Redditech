import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { sorted } from "../../types/filter";

import styles from "./style";

interface FilterProps {
    filterValue: sorted;
    setFilterValue: React.Dispatch<React.SetStateAction<sorted>>;
}

const Filter = ({ filterValue, setFilterValue }: FilterProps) => {
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
        if (filter !== filterValue) {
            setFilterValue(filter);
        }
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={onPressFilter}>
                {filterValue === sorted.best && (
                    <>
                        <MaterialCommunityIcons name="rocket-outline" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>BEST POST</Text>
                    </>
                )}
                {filterValue === sorted.hot && (
                    <>
                        <SimpleLineIcons name="fire" color="grey" size={18} style={styles.icon} />
                        <Text style={styles.text}>HOT POST</Text>
                    </>
                )}
                {filterValue === sorted.new && (
                    <>
                        <MaterialCommunityIcons name="selection-ellipse" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>NEW POST</Text>
                    </>
                )}
                {filterValue === sorted.top && (
                    <>
                        <MaterialCommunityIcons name="arrow-expand-up" color="grey" size={19} style={styles.icon} />
                        <Text style={styles.text}>TOP POST</Text>
                    </>
                )}
                {filterValue === sorted.controversial && (
                    <>
                        <MaterialCommunityIcons name="sword" color="grey" size={20} style={styles.icon} />
                        <Text style={styles.text}>CONTROVERSIAL POST</Text>
                    </>
                )}
                {filterValue === sorted.rising && (
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
                                color={filterValue === sorted.best ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.best ? "white" : "grey" },
                                ]}
                            >
                                Best
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.hot)}>
                            <SimpleLineIcons
                                name="fire"
                                color={filterValue === sorted.hot ? "white" : "grey"}
                                size={18}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.hot ? "white" : "grey" },
                                ]}
                            >
                                Hot
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.new)}>
                            <MaterialCommunityIcons
                                name="selection-ellipse"
                                color={filterValue === sorted.new ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.new ? "white" : "grey" },
                                ]}
                            >
                                New
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.top)}>
                            <MaterialCommunityIcons
                                name="arrow-expand-up"
                                color={filterValue === sorted.top ? "white" : "grey"}
                                size={19}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.top ? "white" : "grey" },
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
                                color={filterValue === sorted.controversial ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.controversial ? "white" : "grey" },
                                ]}
                            >
                                Controversial
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableModal} onPress={() => onPressModal(sorted.rising)}>
                            <MaterialCommunityIcons
                                name="elevation-rise"
                                color={filterValue === sorted.rising ? "white" : "grey"}
                                size={20}
                                style={styles.icon}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    { fontSize: 13, color: filterValue === sorted.rising ? "white" : "grey" },
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
