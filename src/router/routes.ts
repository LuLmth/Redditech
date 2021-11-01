import { SubReddit as SubRedditType } from "../../types/sub";

export type LaunchRoutes = {
    SignIn: undefined;
    tabNavigator: undefined;
};

export type TabNavigatorRoutes = {
    Home: undefined;
    subNavigator: undefined;
    Create: undefined;
    Chat: undefined;
    Profile: undefined;
};

export type SubRoutes = {
    Sub: undefined;
    SubContent: { subRedditInfo: SubRedditType };
};
