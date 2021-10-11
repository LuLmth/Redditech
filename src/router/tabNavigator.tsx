import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { TabNavigatorRoutes } from "./routes";

import HomeScreen from "../screens/HomeScreen";
import HomeHeader from "../components/Home/Header";

import StyleGuide from "../constants/StyleGuide";

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
            options={{
                title: undefined,
                header: () => <HomeHeader />,
            }}
        />
        <Tab.Screen name="Browse" component={HomeScreen} />
        <Tab.Screen name="Create" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={HomeScreen} />
    </Tab.Navigator>
);

export default tabNavigator;
