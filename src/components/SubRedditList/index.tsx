import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { ApiGetRequest } from "../../services/ApiRequest";
import { getValue } from "../../services/SecureStore";
import SubReddit from "../SubReddit";
import { SubReddit as SubRedditType } from "../../types/sub";

import styles from "./style";

const SubRedditList = () => {
    const [subReddit, setSubReddit] = useState<SubRedditType[]>([]);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getValue("accessToken");
                setAccessToken(token);
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchToken();
    }, []);

    useEffect(() => {
        setSubReddit([]);
        const fetchSubs = async () => {
            try {
                //
            } catch (e) {
                console.log(e.errors);
            }
        };
        fetchSubs();
    }, [accessToken]);

    if (subReddit.length === 0) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <FlatList
            data={subReddit}
            renderItem={({ item }) => <SubReddit subRedditContent={item} />}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default SubRedditList;
