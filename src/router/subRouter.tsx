import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SubRoutes } from "./routes";
import SubScreen from "../screens/SubScreen";
import SubContentScreen from "../screens/SubContentScreen";

import Header from "../components/Header";


const SubStack = createStackNavigator<SubRoutes>();

const SubRouter = () => (
    <SubStack.Navigator
        initialRouteName="Sub"
    >
        <SubStack.Screen
            name="Sub"
            component={SubScreen}
            options={{
                title: undefined,
                header: () => <Header />,
            }}
        />
        <SubStack.Screen
            name="SubContent"
            component={SubContentScreen}
            options={{ headerShown: false }}
            initialParams={{ subRedditInfo: {} }}
        />
    </SubStack.Navigator>
);

export default SubRouter;
