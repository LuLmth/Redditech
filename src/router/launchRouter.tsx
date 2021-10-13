import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LaunchRoutes } from "./routes";
import SignIn from "../screens/SignIn";
import tabNavigator from "./tabNavigator";

const RootStack = createStackNavigator<LaunchRoutes>();

const LaunchRouter = () => (
    <RootStack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="tabNavigator"
    >
        <RootStack.Screen
            name="SignIn"
            component={SignIn}
        />
        <RootStack.Screen
            name="tabNavigator"
            component={tabNavigator}
        />
    </RootStack.Navigator>
);

export default LaunchRouter;
