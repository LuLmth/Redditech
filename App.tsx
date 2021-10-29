import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router/launchRouter";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => (
    <NavigationContainer>
        <AuthProvider>
            <StatusBar style="light" />
            <Router />
        </AuthProvider>
    </NavigationContainer>
);

export default App;
