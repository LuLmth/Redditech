import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import { TabNavigatorRoutes } from "./routes";

import HomeScreen from "../screens/HomeScreen";
import CreateScreen from "../screens/CreateScreen";
import ChatScreen from "../screens/ChatScreen";
import Profilecreen from "../screens/ProfileSreen";
import Header from "../components/Header";

import SubRouter from "./subRouter";

import StyleGuide from "../constants/StyleGuide";

const Tab = createBottomTabNavigator<TabNavigatorRoutes>();

const tabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Home") {
                    return <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={size} />;
                }
                if (route.name === "subNavigator") {
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
                if (route.name === "Profile") {
                    return <FontAwesome5 name={focused ? "user-alt" : "user"} color={color} size={size - 4} />;
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
                header: () => <Header />,
            }}
        />
        <Tab.Screen
            name="subNavigator"
            component={SubRouter}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Create"
            component={CreateScreen}
            options={{ headerStyle: { backgroundColor: StyleGuide.palette.background } }}
        />
        <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{ headerStyle: { backgroundColor: StyleGuide.palette.background } }}
        />
        <Tab.Screen name="Profile" component={Profilecreen} options={{ headerShown: false }} />
    </Tab.Navigator>
);

export default tabNavigator;
