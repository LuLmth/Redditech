import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router/launchRouter";

const App = () => (
    <NavigationContainer>
        <StatusBar style="light" />
        <Router />
    </NavigationContainer>
);

export default App;
