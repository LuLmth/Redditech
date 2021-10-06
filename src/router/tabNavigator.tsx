import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { TabNavigatorRoutes } from "./routes";

import HomeScreen from "../screens/HomeScreen";

import StyleGuide from "../constants/StyleGuide";
import styles from "./tabNavigator.styles";
import users from "../fakeDatas/users";

const Tab = createBottomTabNavigator<TabNavigatorRoutes>();

const tabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Home") {
                    return <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={size} />;
                }
                if (route.name === "Browse") {
                    return (
                        <MaterialCommunityIcons
                            name={focused ? "folder-search" : "folder-search-outline"}
                            color={color}
                            size={size}
                        />
                    );
                }
                if (route.name === "Create") {
                    return <Ionicons name={focused ? "add" : "add-outline"} color={color} size={size + 8} />;
                }
                if (route.name === "Chat") {
                    return (
                        <Ionicons
                            name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                            color={color}
                            size={size}
                        />
                    );
                }
                if (route.name === "Inbox") {
                    return (
                        <MaterialCommunityIcons name={focused ? "bell" : "bell-outline"} color={color} size={size} />
                    );
                }
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "grey",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: [
                {
                    display: "flex",
                    backgroundColor: StyleGuide.palette.background,
                },
                null,
            ],
        })}
        initialRouteName="Home"
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            // options={{
            //     title: undefined,
            //     header: () => {

            //         return (
            //             <View style={{ backgroundColor: StyleGuide.palette.background }}>
            //                 <ImageBackground
            //                     source={{ uri: users[0].profilePicture }}
            //                     resizeMode="contain"
            //                     style={styles.profilePicturePosition}
            //                     imageStyle={styles.profilePicture}
            //                 >
            //                     <View />
            //                 </ImageBackground>
            //             </View>
            //         );
            //     },
            // }}
        />
        <Tab.Screen name="Browse" component={HomeScreen} />
        <Tab.Screen name="Create" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={HomeScreen} />
    </Tab.Navigator>
);

export default tabNavigator;
