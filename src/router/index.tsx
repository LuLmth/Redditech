import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LaunchRoutes } from "./routes";
import SignIn from "../screens/SignIn";
import HomePage from "../screens/HomePage";

const RootStack = createStackNavigator<LaunchRoutes>();

const Router = () => (
    <RootStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <RootStack.Screen
            name="SignIn"
            component={SignIn}
        />
        <RootStack.Screen
            name="HomePage"
            component={HomePage}
        />
    </RootStack.Navigator>
);

export default Router;
