import { StatusBar } from "expo-status-bar";
import React from "react";

import LoadAssets from "./src/components/LoadAssets";
import Router from "./src/router/launchRouter";

const App = () => (
    <LoadAssets>
        <StatusBar style="light" />
        <Router />
    </LoadAssets>
);

export default App;
